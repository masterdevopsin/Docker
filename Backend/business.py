def get_data():
    try:
        with open('names.txt', 'r') as f:
            data = f.read().splitlines()
        return data
    except Exception as e:
        return str(e)
