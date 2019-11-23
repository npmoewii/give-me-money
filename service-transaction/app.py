from flask import Flask, request, Response
from flask_cors import CORS
import requests
import config
import db
import json


app = Flask(__name__)
CORS(app)


@app.route("/create", methods=["post"])
def postCreate():
    data = request.get_json()
    req = dict()
    req["username"] = data["username_to"]
    req["key"] = data["key"]
    resp = requests.post(config.user_service+"/isVerifyKey", json=req)
    print(req, resp.content)
    if (resp.status_code == 200 and json.loads(resp.content) == True):
        db.addTransaction(data["username_from"],
                          data["username_to"], data["money"])
        return Response("", status=200)
    else:
        return Response("", status=403)


@app.route("/list/all", methods=["get"])
def getListAll():
    data = json.dumps(db.getAllTransaction(), ensure_ascii=False)
    return Response(data, status=200)


@app.route("/list/<username>", methods=["get"])
def getAllRelated(username):
    data = json.dumps(db.getAllRelated(username), ensure_ascii=False)
    return Response(data, status=200)


if __name__ == '__main__':
    app.run(port=config.port, debug=False)
