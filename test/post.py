import requests as r

response = r.post("http://localhost:8085", data={"name": 114514})

print(response.content.decode())