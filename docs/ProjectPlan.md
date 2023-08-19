# Project Management App

## Problem Statement:
I struggle with managing and initiating personal projects due to feeling overwhelmed by their scope, difficulty in selecting from multiple project ideas, managing distractions, and difficulty in continuing projects due to forgetting what I've already done.

## Solution:
A project management app that guides me through the process of selecting a project, defining it, breaking it down into manageable tasks, scheduling my work, minimizing distractions, and tracking my progress.

## Minimum Viable Product (MVP):

1. **Project Selection:** The app will display a list of your projects, and allow you to select a project to work on. The project that was last worked on will be highlighted.

2. **Project Definition:** You will be able to define a new project, including its name, a brief description, and a status (not started, in progress, or completed).

3. **Project Dashboard:** (FRONT END FEATURE) Each project will have a summary dashboard page, displaying key details including project name, brief description, last N tasks completed, the last comment, last commit, and next steps (tasks in progress or available tasks).

4. **Task Breakdown and Scheduling:** Within each project, you will be able to break down the project into smaller tasks, and each task into subtasks if necessary. You will be able to set a status for each task/subtask (not started, in progress, or completed), and a TaskIndex/SubtaskIndex indicating their relative order.

5. **Progress Tracking:** Progress tracking for each task/subtask will be done in a Kanban style, allowing tasks/subtasks to be moved from not started, to in progress, to completed.

6. **Feature Ideation:** You will be able to brainstorm and capture ideas for features in the ProjectFeatures table, associated with tasks or subtasks as needed.

### Future Features:
1. Distraction Management Feature
2. Project Comparison Feature
3. Collaboration Features
4. Learning Resources Integration
5. Offline Mode

### Technology Stack:

- **Frontend:** React.js
- **Backend:** Node.js with Express
- **Database:** MongoDB

## Database Schema:

1. **Users**
    - **UserID**: Unique identifier for the user.
    - **Username**: User's chosen username.
    - **Password**: User's encrypted password.
    - **Email**: User's email address. (Will want to add authentication later)
    - **LastWorkedOnProjectID**: The ID of the project that the user last worked on.

2. **Projects**
    - **ProjectID**: Unique identifier for the project.
    - **UserID**: The ID of the user the project belongs to.
    - **Name**: The name of the project.
    - **Description**: A brief description of the project.
    - **Status**: The current status of the project (not started, in progress, completed).

3. **Tasks**
    - **TaskID**: Unique identifier for the task.
    - **ProjectID**: The ID of the project the task belongs to.
    - **Name**: The name of the task.
    - **Status**: The current status of the task (not started, in progress, completed).
    - **TaskIndex**: The relative order of the task within the project.

4. **Subtasks**
    - **SubtaskID**: Unique identifier for the subtask.
    - **TaskID**: The ID of the task the subtask belongs to.
    - **Name**: The name of the subtask.
    - **Status**: The current status of the subtask (not started, in progress, completed).
    - **SubtaskIndex**: The relative order of the subtask within the task.

5. **ProjectFeatures**
    - **FeatureID**: Unique identifier for the feature.
    - **ProjectID**: The ID of the project the feature belongs to.
    - **Description**: A description of the feature.
    - **TaskID**: The ID of the task associated with the feature (nullable).
    - **SubtaskID**: The ID of the subtask associated with the feature (nullable).

6. **Comments**
    - **ID**: Unique identifier for the comment.
    - **UserID**: The ID of the user who made the comment.
    - **ProjectID**: The ID of the project the comment belongs to (nullable).
    - **TaskID**: The ID of the task associated with the comment (nullable).
    - **SubtaskID**: The ID of the subtask associated with the comment (nullable).
    - **Content**: The text of the comment.
    - **Timestamp**: When the comment was made.

7. **Commits** (optional, not 100% sold on this one)
    - **ID**: Unique identifier for the commit.
    - **UserID**: The ID of the user who made the commit.
    - **ProjectID**: The ID of the project the commit belongs to (nullable).
    - **TaskID**: The ID of the task associated with the commit (nullable).
    - **SubtaskID**: The ID of the subtask associated with the commit (nullable).
    - **Content**: The text of the commit.
    - **Timestamp**: When the commit was made.

## Initial list that inspired this project
Starting a new coding project can certainly feel overwhelming, especially when you're unsure about where or how to begin. Here are some steps that may help you get started:

1. **Choose a project**: If you have several project ideas, it may be difficult to decide on one. You might feel like if you choose one, you're missing out on the others. This phenomenon is known as analysis paralysis. To overcome this, you can start by making a list of all your project ideas, and then evaluate each idea based on factors like the skills you will learn, the project's complexity, its potential impact, your interest in the topic, and so on. Prioritize the projects based on this evaluation and choose the one that comes out on top.

2. **Define the project**: Once you've selected a project, define what you want it to be in clear terms. Write down the problem you are trying to solve and how you envision your solution working. This is essentially your project's mission statement.

3. **Break the project down**: Large projects can feel intimidating, but when you break them down into smaller, manageable tasks, they become much easier to tackle. List out all the components your project will need, and create a to-do list with each small task. For example, if you're building a web application, you might need to design a UI, write backend code, set up a database, and so on. Each of these can be broken down further into smaller tasks.

4. **Start with something simple**: Start by working on a simple task from your list. It doesn't need to be the first thing on the list. It can be anything that feels manageable and interesting. The goal is to get started and gain momentum.

5. **Make a schedule**: Allocate specific times in your day for working on your project. This can help establish a routine and make it easier for you to start working. Having a set time to work can also help you avoid distractions.

6. **Address distractions**: Identify the distractions that prevent you from starting your work, like playing video games or getting high, and figure out ways to minimize them. For instance, you could keep your gaming console in another room while you're working, or schedule your work sessions during times when you're less likely to use substances.

7. **Celebrate small victories**: Don't wait until the end of the project to celebrate. Each small task you complete is a step closer to your goal. Celebrating these small victories can help motivate you and keep you interested in the project.
Expanding the list to 10 items could provide additional features and depth to your app, but it's important to ensure that these additional items add value and don't detract from the core functionality. Here are three additional ideas that could complement the seven already provided:

8. **Collaboration Features**: If your users are likely to work in teams, a feature to share projects and tasks, leave comments, and assign tasks could be beneficial. Collaboration often brings diverse perspectives and ideas that can enhance project outcomes.

9. **Learning Resources Integration**: Coding projects often involve learning new concepts and technologies. Integrating or providing links to relevant learning resources (like programming tutorials, documentation, etc.) based on the project's requirements could be valuable.

10. **Offline Mode**: Depending on the nature of your app and the needs of your users, an offline mode that allows users to view and edit their projects even without an internet connection could be quite useful.

Remember, it's okay to not be perfect. You're working on this project to learn and grow. Don't stress too much about making everything perfect. The most important thing is that you're making progress and enjoying the process. Happy coding!