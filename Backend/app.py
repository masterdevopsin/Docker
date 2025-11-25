from flask import Flask, jsonify
from flask_cors import CORS       
from business import get_data
app = Flask(__name__)
CORS(app)                      
   # ✅ enable CORS for all routes
@app.route('/')
def hello_world():
 return "Hello, World!"
@app.route('/api', methods=['GET'])
def api():
 data = get_data()
 response = {'data': data}
 return jsonify(response)
if __name__ == '__main__':
 app.run(host='0.0.0.0', port=8000, debug=True)
