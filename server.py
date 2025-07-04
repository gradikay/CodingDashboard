#!/usr/bin/env python3
import http.server
import socketserver
import os
import urllib.parse
import mimetypes
from pathlib import Path

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def guess_type(self, path):
        """Guess the type of a file based on its URL."""
        base, ext = os.path.splitext(path)
        if ext in ('.png', '.jpg', '.jpeg', '.gif', '.svg'):
            return f'image/{ext[1:]}'
        return super().guess_type(path)

    def do_GET(self):
        """Handle GET requests with better file serving."""
        try:
            # Parse the URL
            parsed_path = urllib.parse.urlparse(self.path)
            file_path = parsed_path.path.lstrip('/')
            
            # Handle special case for attached_assets with URL encoded names
            if file_path.startswith('attached_assets/'):
                # URL decode the filename
                file_path = urllib.parse.unquote(file_path)
                
                # Check if file exists
                if os.path.exists(file_path):
                    # Try to serve the file
                    try:
                        with open(file_path, 'rb') as f:
                            content = f.read()
                            
                        # Guess content type
                        content_type, _ = mimetypes.guess_type(file_path)
                        if content_type is None:
                            content_type = 'application/octet-stream'
                            
                        # Send response
                        self.send_response(200)
                        self.send_header('Content-Type', content_type)
                        self.send_header('Content-Length', str(len(content)))
                        self.end_headers()
                        self.wfile.write(content)
                        return
                    except PermissionError:
                        self.send_error(403, "Permission denied")
                        return
                    except Exception as e:
                        self.send_error(500, f"Server error: {str(e)}")
                        return
                else:
                    self.send_error(404, "File not found")
                    return
            
            # For all other files, use the default handler
            super().do_GET()
            
        except Exception as e:
            self.send_error(500, f"Server error: {str(e)}")

if __name__ == "__main__":
    PORT = 5000
    
    # Change to the directory containing the files
    os.chdir("/home/runner/workspace")
    
    with socketserver.TCPServer(("0.0.0.0", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"Server running at http://0.0.0.0:{PORT}/")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")