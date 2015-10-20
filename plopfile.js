module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'component template',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name?',
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
    
    plop.setGenerator('state', {
        description: 'state template',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'state name?',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        }],
        actions: [{
            type: 'add',
            path: 'src/states/{{dashCase name}}.js',
            templateFile: 'generators/state.template'
        }]
    });
};