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
            path: 'src/components/{{properCase name}}.js',
            templateFile: 'scaffolds/component.template'
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
            path: 'src/states/{{properCase name}}.js',
            templateFile: 'scaffolds/state.template'
        }]
    });
    
};