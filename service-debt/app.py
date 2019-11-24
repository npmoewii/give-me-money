from flask import Flask, request, Response
from flask_cors import CORS
import config
import mysql.connector
import requests
import db
import json


def getUserMap():
    db = mysql.connector.connect(host=config.db_host, port=config.db_port,
                                 user=config.db_username, password=config.db_password, db=config.db_name)
    resp = requests.get(config.user_service+"/all")
    users = json.loads(resp.content)
    userMap = dict()
    for user in users:
        username = user["username"]
        userMap[username] = user["display_name"]
    return userMap


app = Flask(__name__)
CORS(app)


@app.route("/create", methods=["post"])
def postCreate():
    data = request.get_json()
    db.addDebt(data["username_creditor"],
               data["username_debtor"], data["name"], data["cost"])
    return Response("", status=200)


@app.route("/list/all", methods=["get"])
def getListAll():
    data = db.getAllDebt()
    userMap = getUserMap()
    for elm in data:
        username = elm["creditor"]
        elm["creditor"] = {"username": username,
                           "display_name": userMap.get(username, "null")}
        username = elm["debtor"]
        elm["debtor"] = {"username": username,
                         "display_name": userMap.get(username, "null")}
    data = json.dumps(data, ensure_ascii=False)
    return Response(data, status=200)


@app.route("/list/<username>", methods=["get"])
def getAllRelated(username):
    data = db.getAllRelated(username)
    userMap = getUserMap()
    for elm in data:
        username = elm["creditor"]
        elm["creditor"] = {"username": username,
                           "display_name": userMap.get(username, "null")}
        username = elm["debtor"]
        elm["debtor"] = {"username": username,
                         "display_name": userMap.get(username, "null")}
    data = json.dumps(data, ensure_ascii=False)
    return Response(data, status=200)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=config.port, debug=False)
