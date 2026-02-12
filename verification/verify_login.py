
from playwright.sync_api import sync_playwright
import time

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Navigate to local server
            page.goto("http://localhost:8080/index.html")

            # Wait for content to load
            page.wait_for_selector("#login-screen")

            # Take screenshot of login screen
            page.screenshot(path="verification/login_screen.png")
            print("Screenshot taken: verification/login_screen.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_app()
