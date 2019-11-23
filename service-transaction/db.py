import MySQLdb
import config


def connectDB():
    db = MySQLdb.connect(host=config.db_host, port=config.db_port, user=config.db_username,
                         passwd=config.db_password, db=config.db_name, charset="utf8mb4")
    return db


def getAllTransaction():
    db = connectDB()
    c = db.cursor()
    c.execute("select * from transaction")
    a = c.fetchall()
    res = []
    for (id, fromID, toID, money, time) in a:
        data = dict()
        data["id"] = id
        data["from"] = fromID
        data["to"] = toID
        data["money"] = money
        data["time"] = str(time)
        res.append(data)
    return res


def getAllRelated(id):
    db = connectDB()
    c = db.cursor()
    c.execute("select * from transaction where transaction.username_from = %s or transaction.username_to = %s;", (id, id))
    a = c.fetchall()
    res = []
    for (id, fromID, toID, money, time) in a:
        data = dict()
        data["id"] = id
        data["from"] = fromID
        data["to"] = toID
        data["money"] = money
        data["time"] = str(time)
        res.append(data)
    return res


def addTransaction(fromID, toID, money):
    db = connectDB()
    c = db.cursor()
    c.execute("insert into transaction (username_from, username_to, money) values (%s, %s, %s)",
              (fromID, toID, money))
    db.commit()
