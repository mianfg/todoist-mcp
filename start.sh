#!/bin/sh
set -e
# MCP proxy on 3001 (internal), auth proxy on 3000 (external)
# Use run_proxy.py to patch 64KB stream limit -> 1MB (fixes tools/list overflow)
python run_proxy.py --host 127.0.0.1 --port 3001 node dist/index.js &
sleep 2
exec python -m uvicorn auth_proxy:app --host 0.0.0.0 --port 3000
