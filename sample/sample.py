import os
from regex import Regex


class Test(object):
    const: str = None
    boolean: bool = True
    number: int = 9

    def __init__(self, param) -> None:
        self.param = param

    def testFunction(self):
        with open("/tmp/data") as f:
            self.const = f.read()
        for i in range(self.number):
            print(i, "lol")

    @staticmethod
    def testObj():
        data = {"some": "value"}
        if data.get("some"):
            return data
        else:
            return None

import http.client

conn = http.client.HTTPSConnection("httpbin.org")

payload = ""

conn.request("GET", "/get", payload)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))