import mysql.connector
import config


def connectDB():
    db = mysql.connector.connect(host=config.db_host, port=config.db_port, user=config.db_username,
                                 password=config.db_password, db=config.db_name)
    return db


def getAllDebt():
    db = connectDB()
    c = db.cursor()
    c.execute("select * from debt")
    a = c.fetchall()
    res = []
    for (id, creditorID, debtorID, name, cost, time) in a:
        data = dict()
        data["id"] = id
        data["creditor"] = creditorID
        data["debtor"] = debtorID
        data["name"] = name
        data["cost"] = cost
        data["time"] = str(time)
        res.append(data)
    return res


def getAllRelated(id):
    db = connectDB()
    c = db.cursor()
    c.execute(
        "select * from debt where debt.username_creditor = %s or debt.username_debtor = %s;", (id, id))
    a = c.fetchall()
    res = []
    for (id, creditorID, debtorID, name, cost, time) in a:
        data = dict()
        data["id"] = id
        data["creditor"] = creditorID
        data["debtor"] = debtorID
        data["name"] = name
        data["cost"] = cost
        data["time"] = str(time)
        res.append(data)
    return res


def addDebt(fromID, toID, name, cost):
    db = connectDB()
    c = db.cursor()
    c.execute("insert into debt (username_creditor, username_debtor, name, cost) values (%s, %s, %s, %s)",
              (fromID, toID, name, cost))
    db.commit()
