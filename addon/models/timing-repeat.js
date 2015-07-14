import DS from 'ember-data';
var TimingRepeat

TimingRepeat =  DS.Model.extend({  
    bounds: DS.belongsTo('period', {embedded: 'always'}),
    count: DS.attr('number'), //integer
    duration: DS.attr('number'), //decimal
    durationUnits: DS.attr('string'), //code
    frequency: DS.attr('number'), //integer 
    frequencyMax: DS.attr('number'), //integer
    period: DS.attr('number'), //decimal
    periodMax: DS.attr('number'), //decimal
    periodUnits: DS.attr('string'), //code
    when:  DS.attr('string') //code
});

export default TimingRepeat
