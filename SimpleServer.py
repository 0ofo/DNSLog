import socket
from dnslib import DNSRecord, DNSHeader, RR, A

dns_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
dns_socket.bind(('0.0.0.0', 53))

while True:
    data, address = dns_socket.recvfrom(1024)
    request = DNSRecord.parse(data)
    qname = request.q.qname
    reply = DNSRecord(
        DNSHeader(id=request.header.id, qr=1, aa=1, ra=1),
        q=request.q,
        a=RR(qname, rdata=A("127.0.0.1"))
    )
    dns_socket.sendto(reply.pack(), address)
    print(qname)
