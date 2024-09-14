from flask import Flask, request
import sys, os

app = Flask(__name__)

'''
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
'''
QUEUE = [{}]

'''
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
'''
DRIVERS = [{}]

def usage_error():
    print(f"ERROR: Usage: python {os.path.basename(__file__)} [api_key: str]", file=sys.stderr)
    sys.exit(1)

@app.route('/data')
def index():
    return "This is the root index returned."

if __name__ == "__main__":

    api_key= ""
    match (len(sys.argv)):
        case 1:
            app.run(debug=True)
        case 2:
            api_key = sys.argv[1]
            print(f"API Key accepted: {sys.argv[1]}")
            app.run(debug=True)
        case default:
            usage_error()