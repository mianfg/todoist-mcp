#!/usr/bin/env python3
"""Run MCP proxy with patched subprocess limit for large tools/list responses.

The default asyncio StreamReader limit (64KB) causes LimitOverrunError when
the Todoist MCP server returns its tools list (80+ tools with schemas).
We patch create_subprocess_exec to use limit=1MB.
"""
import asyncio
import sys

# Patch before importing proxy
_original_create_subprocess_exec = asyncio.create_subprocess_exec


async def _patched_create_subprocess_exec(*args, **kwargs):
    kwargs.setdefault("limit", 1024 * 1024)  # 1MB
    return await _original_create_subprocess_exec(*args, **kwargs)


def _patch():
    asyncio.create_subprocess_exec = _patched_create_subprocess_exec


_patch()

from mcp_streamablehttp_proxy.cli import main

if __name__ == "__main__":
    sys.exit(main())
