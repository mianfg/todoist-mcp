/**
 * Tool name aliases for todoist-mcp-server-extended compatibility.
 * Extended uses todoist_X_y format, greirson uses todoist_x_Y format.
 */
import { Tool } from "@modelcontextprotocol/sdk/types.js";
import {
  CREATE_TASK_TOOL,
  GET_TASKS_TOOL,
  UPDATE_TASK_TOOL,
  DELETE_TASK_TOOL,
  COMPLETE_TASK_TOOL,
} from "./task-tools.js";
import {
  GET_PROJECTS_TOOL,
  GET_SECTIONS_TOOL,
  CREATE_PROJECT_TOOL,
  UPDATE_PROJECT_TOOL,
  CREATE_SECTION_TOOL,
} from "./project-tools.js";
import {
  GET_LABELS_TOOL,
  CREATE_LABEL_TOOL,
  UPDATE_LABEL_TOOL,
  DELETE_LABEL_TOOL,
} from "./label-tools.js";
import {
  GET_SHARED_LABELS_TOOL,
  RENAME_SHARED_LABEL_TOOL,
  REMOVE_SHARED_LABEL_TOOL,
} from "./shared-label-tools.js";

const alias = (tool: Tool, name: string): Tool => ({ ...tool, name });

export const EXTENDED_ALIAS_TOOLS: Tool[] = [
  alias(CREATE_TASK_TOOL, "todoist_create_task"),
  alias(GET_TASKS_TOOL, "todoist_get_tasks"),
  alias(UPDATE_TASK_TOOL, "todoist_update_task"),
  alias(DELETE_TASK_TOOL, "todoist_delete_task"),
  alias(COMPLETE_TASK_TOOL, "todoist_complete_task"),
  alias(GET_PROJECTS_TOOL, "todoist_get_projects"),
  alias(CREATE_PROJECT_TOOL, "todoist_create_project"),
  alias(UPDATE_PROJECT_TOOL, "todoist_update_project"),
  alias(GET_SECTIONS_TOOL, "todoist_get_project_sections"),
  alias(CREATE_SECTION_TOOL, "todoist_create_project_section"),
  alias(GET_LABELS_TOOL, "todoist_get_personal_labels"),
  alias(GET_LABELS_TOOL, "todoist_get_personal_label"),
  alias(CREATE_LABEL_TOOL, "todoist_create_personal_label"),
  alias(UPDATE_LABEL_TOOL, "todoist_update_personal_label"),
  alias(DELETE_LABEL_TOOL, "todoist_delete_personal_label"),
  alias(GET_SHARED_LABELS_TOOL, "todoist_get_shared_labels"),
  alias(RENAME_SHARED_LABEL_TOOL, "todoist_rename_shared_labels"),
  alias(REMOVE_SHARED_LABEL_TOOL, "todoist_remove_shared_labels"),
  alias(UPDATE_TASK_TOOL, "todoist_update_task_labels"),
];
