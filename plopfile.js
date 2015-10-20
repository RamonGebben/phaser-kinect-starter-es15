module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'component template',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        }],
        actions: [{
            type: 'add',
            path: 'src/components/{{dashCase name}}.js',
            templateFile: 'generators/component.template'
        }]
    });
};