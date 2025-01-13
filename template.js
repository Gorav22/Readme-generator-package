function generateReadmeTemplate({
    projectName,
    description,
    preRequisites,
    installationSteps,
    environmentVariables,
    techStack,
    features,
    contributing,
    license,
  }) {
    return `
  # ${projectName}
  
  ## Introduction
  ${description}
  
  ## Setup and Installation
  
  ### Pre-Requisites
  ${preRequisites.join("\n")}
  
  ### Installation
  ${installationSteps}
  
  ### Environment Variables
  The project relies on several environment variables. Create a \`.env\` file with the following variables:
  
  ${environmentVariables}
  
  ## Tech Stack
  ### Frontend
  ${techStack.frontend.join("\n")}
  
  ### Backend
  ${techStack.backend.join("\n")}
  
  ## Features
  ${features.join("\n")}
  
  ## Contributing
  ${contributing}
  
  ## License
  ${license}
    `;
  }

  
module.exports = { generateReadmeTemplate };
  