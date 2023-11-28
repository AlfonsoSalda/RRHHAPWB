import http.server
import socketserver
import os
import json
import webbrowser

PORT = 8000
URL = f"http://localhost:{PORT}/frontend/login.html"

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/database/ID_Admin.txt':
            # Manejar solicitudes POST en /database/ID_Admin.txt
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode('utf-8')
            data = json.loads(post_data)
            worker_id = data.get('workerId')

            try:
                # Escribir el ID en el archivo
                with open("database/ID_Admin.txt", "a") as id_file:
                    id_file.write(worker_id + '\n')

                self.send_response(200)
                self.end_headers()
                self.wfile.write(json.dumps({'success': True}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
        elif self.path == '/database/Contraseña_Admin.txt':
            # Manejar solicitudes POST en /database/Contraseña_Admin.txt
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length).decode('utf-8')
            data = json.loads(post_data)
            password = data.get('password')

            try:
                # Escribir la contraseña en el archivo
                with open("database/Contraseña_Admin.txt", "a") as password_file:
                    password_file.write(password + '\n')

                self.send_response(200)
                self.end_headers()
                self.wfile.write(json.dumps({'success': True}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(json.dumps({'success': False, 'error': 'Not Found'}).encode('utf-8'))

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"Serving on port {PORT}")
    webbrowser.open(URL)
    httpd.serve_forever()
