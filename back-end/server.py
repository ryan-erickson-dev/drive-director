from flask import Flask, request, jsonify
import sys, os
import json

app = Flask(__name__)

def usage_error():
    print(f"ERROR: Usage: python {os.path.basename(__file__)} [api_key: str]", file=sys.stderr)
    sys.exit(1)

api_key = ""

if __name__ == "__main__":
    match (len(sys.argv)):
        case 1:
            app.run(debug=True)
        case 2:
            api_key = sys.argv[1]
            print(f"API Key accepted: {sys.argv[1]}")
            app.run(debug=True)
        case default:
            usage_error()

@app.route('/get_route', methods=["POST"])
def get_route():
    data = request.json
    current_address = data["current_address"]
    destination = data["destination"]
    api_key = 

"""
Queue data Structure:
Stores information about each client that enters
the queue. Used to calculate route information.
[
    {
        "rider_name": "Ryan",
        "passenger_count": 3,
        "current_address": "... Blacksburg, VA 24060",
        "destination":" ... Blacksburg, VA 24060"
    },
    {
        "rider_name":"Brandon",
        "passenger_count": 3,
        "current_address": "... Blacksburg, VA 24060",
        "destination":" ... Blacksburg, VA 24060",
    },
 ...]

 QUEUE.append() to enqueue riders.
 QUEUE.pop(0) to dequeue riders.
"""
QUEUE = [{}]

"""
Driver List:
Stores information about each driver and assigns them a
queue within the web application.

[
    {
        "driver_name": "Ryan",
        "car_make": "Nissan",
        "car_color": "white",
        "car_capacity": 5,
        "driver_queue": QUEUE,
    }
]
"""
DRIVERS = [{}]


@app.route("/add_rider", methods=["POST"])
def add_rider():
    data = request.json
    rider = {
        "rider_name": data["rider_name"],
        "current_address": data["current_address"],
        "destination": data["destination"],
        "passenger_count": data["passenger_count"],
    }
    QUEUE.append(rider)
    return jsonify({"message": "Rider added to queue."})


@app.route("/print_riders", methods=["GET"])
def print_riders():
    for rider in QUEUE:
        print(json.dumps(rider, indent=4))

@app.route("/remove_rider", methods=["POST"])
def remove_rider(name):
    for rider in QUEUE:
        if rider["rider_name"] == name:
            QUEUE.remove(rider)
            return rider

@app.route("/dequeue", methods=["POST"])
def remove_first():
    return QUEUE.pop(0)

@app.route("/init_driver", methods=["POST"])
def init_driver(name, car_make, car_color, car_capacity):
    driver = {
        "driver_name": name,
        "car_make": car_make,
        "car_color": car_color,
        "car_capacity": car_capacity,
        "driver_queue": QUEUE,
    }
    DRIVERS.append(driver)
    return jsonify({"message": "Driver added."})

@app.route("/change_driver_name", methods=["POST"])
def change_driver_name(name, new_name):
    for driver in DRIVERS:
        if driver["driver_name"] == name:
            driver["driver_name"] = new_name
            return jsonify({"message": "Driver name changed."})
    return jsonify({"message": "Driver not found."})

@app.route("/change_driver_make", methods=["POST"])
def change_driver_make(name, new_make):
    for driver in DRIVERS:
        if driver["driver_name"] == name:
            driver["car_make"] = new_make
            return jsonify({"message": "Driver make changed."})
    return jsonify({"message": "Driver not found."})

@app.route("/change_driver_color", methods=["POST"])
def change_driver_color(name, new_color):
    for driver in DRIVERS:
        if driver["driver_name"] == name:
            driver["car_color"] = new_color
            return jsonify({"message": "Driver color changed."})
    return jsonify({"message": "Driver not found."})

@app.route("/change_driver_capacity", methods=["POST"])
def change_driver_capacity(name, new_capacity):
    for driver in DRIVERS:
        if driver["driver_name"] == name:
            driver["car_capacity"] = new_capacity
            return jsonify({"message": "Driver capacity changed."})
    return jsonify({"message": "Driver not found."})

