from flask import Flask
import sys, os

app = Flask(__name__)


def usage_error():
    print(f"ERROR: Usage: python {os.path.basename(__file__)} [api_key: str]", file=sys.stderr)
    sys.exit(1)

@app.route('/')
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