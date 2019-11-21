from flask import Flask, request
import config
import db
import json


app = Flask(__name__)

@app.route("/create", methods=["post"])
def postCreate():
	data = request.get_json()
	db.addDebt(data["username_creditor"], data["username_debtor"], data["name"], data["cost"])

@app.route("/list/all", methods=["get"])
def getListAll():
	data = json.dumps(db.getAllDebt())
	return data

@app.route("/list/<username>", methods=["get"])
def getAllRelated(username):
	data = json.dumps(db.getAllRelated(username))
	return data

if __name__ == '__main__':
	app.run(port=config.port, debug=False)