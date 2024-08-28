# Updated Front-End Developer Test Task

This task is designed to evaluate your front-end development skills, particularly your ability to work with APIs, implement sorting and filtering, handle pagination, and create responsive designs that align with a provided design reference. You are expected to complete this task within 3-4 hours. Please follow the updated instructions below.

## Task Overview

You will create a simple case management dashboard with two main pages:

- **Dashboard Page**: Displays a list of cases retrieved from an API.
- **Case Investigation Page**: Displays detailed information about a specific case.
- **Figma Design**: https://www.figma.com/proto/QDerjKrdCMMEHi6gVcJOB2/Compliance-Tool?node-id=449-11030&t=ng4KTS5EzdQI34IQ-0&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=425%3A10173

## Requirements

### 1. Dashboard Page

#### API Integration:
Fetch data from the following endpoint: [https://goruen.proxy.beeceptor.com/cases/](https://goruen.proxy.beeceptor.com/cases/).

#### Table Display:
Display the fetched cases in a table format.
- Columns: The columns that are drawen exactly in the design, such as ID, Status, Final Decision, etc...

#### Sorting:
- By default, the cases should be sorted by ID in ascending order.
- Clicking on any column header should sort the table based on that column in ascending order.
- Clicking the same header again should reverse the sort order (descending).
- Sorting should be stable, meaning that if two items are identical in the primary sort column, they should remain in their original relative order. If you sort by another column while keeping the primary sort, it should only adjust based on the new column.

#### Filtering:
Implement filtering functionality where users can filter cases based on Status or Final Decision.

#### Pagination:
- Implement pagination with options to display 5, 10, or 15 items per page.
- Include Next and Previous buttons for navigation.

### 2. Case Investigation Page

#### API Integration:
When a user enters a valid case ID (from the list provided below), retrieve the case details using the following endpoint: [https://goruen.proxy.beeceptor.com/cases/{caseId}](https://goruen.proxy.beeceptor.com/cases/{caseId}). Replace `{caseId}` with the actual case ID.

#### Valid Case IDs:
- 847362591
- 203597312
- 459283671
- 912345678
- 748293460
- 583762491
- 674829310
- 982341756

#### Design Adherence:
The design should closely follow the provided Figma design:
- Case Investigation Design.

#### User Interaction:
On this page, include an option for the user to click Agree and Resolve. This should transition the user to a new state:
- Resolved State Design.

### 3. Design Consistency

#### Login & Additional Pages:
The login page and some other page designs are intentionally not provided. We would like to see how you maintain design consistency across pages without a strict reference.

## Deployment and Submission Instructions

### Branch Creation:
- Please create a branch named after yourself in the repository.
- Reach out to us with your email address to be added to the repository so that you can commit your changes.

### Docker Integration (Skip if you don't know, but explain how shall we run on our machine):
- Include a Dockerfile in the project, which will allow the application to be containerized and run using Docker.
- Ensure that your Docker setup allows the project to be easily run on any system with Docker installed.

### Readme File:
- Alter the `README.md` file in the repository to include detailed instructions on how to run the project.
- The instructions should include steps for setting up the environment, building the Docker image, and running the container.
- The checker will follow the instructions in the `README.md` file exactly as written. If the checker is unable to run the project due to missing instructions or dependencies, you will not pass the evaluation.

### Code Quality:
- Ensure that your code is clean, well-commented, and follows best practices. We will review your code structure, use of components, and overall organization.

### Responsiveness:
- Ensure that the design is responsive and works well on various screen sizes.

## Evaluation Criteria

- **Code Quality & Structure**: How clean and maintainable your code is.
- **Functionality**: Does the application meet all the functional requirements?
- **Design Consistency**: How well you adhered to the Figma design and maintained consistency in your custom pages.
- **Docker Setup**: Whether the project runs smoothly following the instructions provided in the `README.md` using Docker.
- **Problem-Solving Skills**: How effectively you implemented sorting, filtering, and pagination.


Good luck, and we look forward to reviewing your work!
