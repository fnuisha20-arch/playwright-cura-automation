A comprehensive browser automation framework using Playwright to automate Cura 3D printing slicer software workflows and web-based testing. This project enables automated testing, configuration, and execution of Cura-based applications through browser-based interactions and web automation.
📋 Table of Contents

Overview
Features
Requirements
Installation
Configuration
Usage
Project Structure
Contributing
License

🎯 Overview
This project automates Cura workflows and web applications using Playwright's powerful browser automation capabilities. Whether you need to test web interfaces that control Cura, automate 3D printing workflows, or validate application behavior, this framework provides the tools to do so efficiently and reliably.
Key Capabilities:

Automated web application testing with Playwright
Cura software interaction and workflow automation
Headless and headed browser automation
Cross-browser support (Chromium, Firefox, WebKit)
Parallel test execution
Detailed logging and reporting

✨ Features

Browser Automation: Full Playwright support for Chromium, Firefox, and WebKit browsers
Cura Integration: Specialized automation for Cura software workflows
Web Testing: Comprehensive testing of web applications controlling or configuring Cura
Flexible Configuration: YAML/JSON-based configuration for easy customization
Custom Scripts: Write and run custom automation scripts
Logging & Reports: Detailed logs and test reports for debugging and monitoring
CI/CD Ready: Easy integration with continuous integration pipelines
Error Handling: Robust error handling and recovery mechanisms

📦 Requirements

Python 3.8 or higher
pip (Python package manager)
Cura (3D printing slicer software) installed on your system
Playwright and its browser dependencies
Modern Operating System: Windows, macOS, or Linux

🚀 Installation
1. Clone the Repository
bashgit clone https://github.com/fnuisha20-arch/playwright-cura-automation.git
cd playwright-cura-automation
2. Install Python Dependencies
bashpip install -r requirements.txt
This will install:

Playwright
All required browser binaries
Supporting libraries and utilities

3. Install Playwright Browsers
bashplaywright install
4. Verify Installation
bashpython -m playwright --version
You should see output confirming the Playwright version installed.
⚙️ Configuration
Configuration File Structure
Create a configuration file in JSON or YAML format to specify your Cura setup and automation parameters:
Example config.json:
json{
  "cura": {
    "installation_path": "/path/to/Cura/installation",
    "version": "5.0",
    "working_directory": "/path/to/3d/models"
  },
  "browser": {
    "headless": false,
    "browser_type": "chromium",
    "timeout": 30000,
    "slow_mo": 0
  },
  "logging": {
    "level": "INFO",
    "output_file": "logs/automation.log"
  }
}
Example config.yaml:
yamlcura:
  installation_path: /path/to/Cura/installation
  version: "5.0"
  working_directory: /path/to/3d/models

browser:
  headless: false
  browser_type: chromium
  timeout: 30000
  slow_mo: 0

logging:
  level: INFO
  output_file: logs/automation.log
Configuration Parameters
ParameterDescriptionRequiredcura.installation_pathFull path to your Cura installation directory✅ Yescura.versionVersion of Cura installed✅ Yesbrowser.headlessRun browser in headless mode (true/false)Nobrowser.timeoutDefault timeout in millisecondsNo
Setting Up Cura Path
Windows:
C:\Program Files\Ultimaker Cura 5.0
macOS:
/Applications/Ultimaker Cura.app
Linux:
/opt/Ultimaker_Cura/
📖 Usage
Running Automation Scripts
Execute a single automation script:
bashpython automation/run_script.py --config config.json --script test_slicing
Run all scripts:
bashpython automation/run_all.py --config config.json
Run in headless mode:
bashpython automation/run_script.py --config config.json --headless
Example: Basic Workflow
pythonfrom playwright.sync_api import sync_playwright
from automation.cura_handler import CuraHandler

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    
    # Load configuration
    cura = CuraHandler(config_path='config.json')
    
    # Navigate and automate
    page.goto('http://localhost:8080/cura')
    cura.load_model(page, 'model.stl')
    cura.configure_settings(page, preset='standard')
    cura.start_slicing(page)
    
    browser.close()
Running Tests
If the project includes test suites:
bash# Run all tests
python -m pytest tests/

# Run specific test file
python -m pytest tests/test_cura_automation.py

# Run with verbose output
python -m pytest tests/ -v

# Run with coverage report
python -m pytest tests/ --cov
📁 Project Structure
playwright-cura-automation/
├── README.md                 # This file
├── requirements.txt          # Python dependencies
├── config.json              # Configuration file template
├── config.yaml              # Configuration file template (YAML)
│
├── automation/              # Main automation scripts
│   ├── __init__.py
│   ├── cura_handler.py      # Cura-specific automation logic
│   ├── run_script.py        # Script runner
│   └── utils.py             # Utility functions
│
├── tests/                   # Test suite
│   ├── __init__.py
│   ├── test_cura_automation.py
│   └── test_web_interface.py
│
├── logs/                    # Automation logs (auto-created)
│   └── automation.log
│
└── models/                  # Sample 3D models (optional)
    └── sample.stl
🔧 Troubleshooting
Issue: Cura Installation Path Not Found
Solution: Verify the path in your configuration file matches your actual Cura installation location.
bash# Find Cura installation
which cura  # Linux/macOS
where Cura.exe  # Windows
Issue: Browser Timeout Errors
Solution: Increase the timeout value in your configuration:
json{
  "browser": {
    "timeout": 60000
  }
}
Issue: Playwright Browsers Not Found
Solution: Reinstall Playwright browsers:
bashplaywright install
playwright install-deps
📝 Contributing
Contributions are welcome! To contribute:

Fork the repository
Create a feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

Guidelines

Follow PEP 8 style guidelines for Python code
Write meaningful commit messages
Include tests for new features
Update documentation as needed
