let pythonBridge = require( "python-bridge")

var python = pythonBridge({
    python: 'python3',
    env: {PYTHONPATH: '../WikiScraper.py'}
});