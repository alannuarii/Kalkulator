from unittest import result
from app import app
from flask import render_template, request

@app.route('/', methods=['GET','POST'])
def index():
    calculate = ''
    data = ''

    try:
        if request.method == 'POST':
            data = request.form['data'] 
            if data.startswith('='):
                data = data.replace('= ','')
                calculate = eval(data)
            else:
                calculate = eval(data)
    except Exception as error:
        print(error)
        calculate = 'Error'
        data = request.form['data']

    return render_template('pages/index.html', title='Kalkulator', result=f"= {calculate}", data=data)