# Contributing to senti-full-dashboard

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.


## Using the issue tracker

The issue tracker is the preferred channel for [bug reports](#bug-reports),
[features requests](#feature-requests) and [submitting pull
requests](#pull-requests), but please respect the following restrictions:

* Please **do not** use the issue tracker for personal support requests (use
  [Stack Overflow](http://stackoverflow.com) or IRC).

* Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.

Issue tracker also allows tracking of creation of [new pages](#new-pages),
[new components](#new-components), [new smart components](#new-smart-components),
[new mixins](#new-mixins), [new designs](#new-designs), and [new-documentations](#new-documentations).


## Bug reports

To create a bug report:

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; create a [reduced test
   case](http://css-tricks.com/6263-reduced-test-cases/) and a live example.

A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? What would you expect to be the outcome? All these
details will help people to fix any potential bugs.

Example:

```
Title: The `paper-foo` element causes the page to turn pink when clicked.

### Expected Behavior
The page stays the same color.

### Current Behavior
The page turns pink.

### Possible Solution
Turn off changing of colors in page

### Steps to Reproduce (for bugs)
1. Put a `paper-foo` element in the page.
2. Open the page in a web browser.
3. Click the `paper-foo` element.

### Context
Because it should change something else, and not the page.

### Your Environment
* Version used: 0.4
* Browser Name and version: Chrome 67
* Operating System and version (desktop or mobile): Windows 10 Desktop
```

If it is possible, **please provide a reduced test case that demonstrates the problem**.


## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to *you* to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.

If you still want to file an issue to request a feature, please provide a clear description of the feature. It can be helpful to describe answers to the following questions:

1. Who will use the feature? *“As someone filling out a form…”*
2. When will they use the feature? *“When I enter an invalid value…”*
3. What is the user’s goal? *“I want to be visually notified that the value needs to be corrected…”*


## New Pages

A new page is an issue that is being tracked when a new page component is needed. The format is as follows:

```
### General info
- Path Pattern: `/`
- Component Name: `page-home`
- Source: `src/pages/page-home`

### Detailed Description
This is the home page.

### Context
Well we need a home page right?

### Possible Implementation
Just create the page

### Design
Follow design issue #1

### Criteria
It should show up
```


## New Components

A new component is an issue that is being tracked when a new component is needed.
A component is a reusable component that doesn't have a loading mechanism of data.
The data should come from outside (usually a parent smart component or other components).
Events and any change in data should bubble up from this component and should
be handled by the parent smart-component.
The format is as follows:

```
### General info
- Component Name: `dumb-component`
- Source: `src/components/dumb-component`

### Detailed Description
It is a layout component without any loading data

### Context
We need a layout component

### Possible Implementation
Use flex

### Design
Follow design issue #2

### Criteria
It should show up
```


## New Smart Components

A new smart component is an issue that is being tracked when a new smart component is needed.
A smart component is a component that encompasses a (dumb) component for delivering data to the
child component and/or processing events or bubbled-up data from the child component.
The format is as follows:

```
### General info
- Component Name: `smart-component`
- Source: `src/smart-components/smart-component`

### Detailed Description
Gets data from API.

### Context
Should get data from API then show it in dumb component

### Possible Implementation
Use fetch

### Criteria
Once it gets data and shows it to dumb component, then it works
```


## New Mixins

A new mixin is an issue that is being tracked when a new mixin is needed.
A mixin is a set of reusable methods and properties that will be used by
different smart components, components, and pages.
The format is as follows:

```
### General info
- Mixin Name: `InheritedMixin`
- Source: `src/mixins/inherited-mixin`

### Detailed Description
It is a reusable mixin with the reuse of the property x.

### Context
We have found that x is being used in dumb component and smart component

### Possible Implementation
set x and get x is good enough

### Criteria
When set x and get x is set, then it works
```


## New Designs

A new design is an issue that is being tracked when a new design is needed.
A design is a set of visual rules and functional processes that will be useful
for making creation work of the site faster.
The format is as follows:

```
### Detailed Description
<!-- Put here the description of the design. -->

### Design link
<!-- Put the design link in Zepellin or picture here -->

### Code snippets
<!-- Any code snippets would be useful. Especially CSS / Stylus codes are appreciated -->
```


## New Documentations

A new documentation is an issue that is being tracked when a new documentation is needed.
The format is as follows:

```
### Detailed Documentation
<!-- Put the reason and connected issues / pages / components for the documentation -->
```


## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code, porting to a different language),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.

Please adhere to the coding conventions used throughout a project (indentation,
accurate comments, etc.) and any other requirements (such as test coverage).

When submitting pull requests, please provide:

1. **A reference to the corresponding issue** or issues that will be closed by the pull request. Please refer to these issues in the pull request description using the following syntax:
```
(For a single issue)
Fixes #20

(For multiple issues)
Fixes #32, fixes #40
```

2. **A succinct description of the design** used to fix any related issues. For example:
```
This fixes #20 by removing styles that leaked which would cause the page to turn pink whenever `paper-foo` is clicked.
```

3. **At least one test for each bug fixed or feature added as part of the pull request.** We will still consider approving your pull request but if you can add a test, please add them :)

To contribute your work:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/senti-full-dashboard %>
   # Navigate to the newly cloned directory
   cd senti-full-dashboard
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/sentiteam/senti-full-dashboard %>
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout <dev-branch>
   git pull upstream <dev-branch>
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely be merged into the main project. Use Git's
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream <dev-branch>
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.


## Contributing Rules

Adding an additional npm package without a clear detail on why it should be added and the byte impact it would add on core-shell or any other page will be disapproved immediately.

I know this is not inherent in the docs (and I think I now have to add that) but I am focusing on making this a performant site. Adding packages at whim is an anti-pattern and I discourage the use of extra libraries without a clear reason WHY it should be part of the app.


## Conventions of commit messages

Adding files on repo

```bash
git commit -m "Add filename"
```

Updating files on repo

```bash
git commit -m "Update filename, filename2, filename3"
```

Removing files on repo

```bash
git commit -m "Remove filename"
```

Renaming files on repo

```bash
git commit -m "Rename filename"
```

Fixing errors and issues on repo

```bash
git commit -m "Fixed #issuenumber Message about this fix"
```

Adding features on repo

```bash
git commit -m "Add Feature: nameoffeature Message about this feature"
```

Updating features on repo

```bash
git commit -m "Update Feature: nameoffeature Message about this update"
```

Removing features on repo

```bash
git commit -m "Remove Feature: nameoffeature Message about this"
```

Ignoring Travis CI build on repo

```bash
git commit -m "Commit message here [ci-skip]"
```

**IMPORTANT**: By submitting a patch, you agree to allow the project owner to
license your work under the same license as that used by the project.