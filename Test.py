import socket

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

try:
    msg = "发送消息到服务器".encode('utf-8')
    sent = sock.sendto(msg, ('ns.fflag.cn', 53))
    data, server = sock.recvfrom(1024)
    print(data.decode())
finally:
    sock.close()
