'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awesome ' + chalk.red('generator-react-client-starter') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  default() {
    // this.composeWith(require.resolve('generator-license'));
  }

  writing() {
    this.fs.copy(
      this.templatePath('react_client_starter_app/**/!(.git)'),
      this.destinationPath(''),
      {globOptions: {dot: true}}
    );
  }

  install() {
    this.yarnInstall();
    // TODO how to initialize git repository
  }
};
