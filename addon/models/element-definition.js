// Copyright (c) 2011-2015, HL7, Inc & The MITRE Corporation
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification,
// are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice, this
//       list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright notice,
//       this list of conditions and the following disclaimer in the documentation
//       and/or other materials provided with the distribution.
//     * Neither the name of HL7 nor the names of its contributors may be used to
//       endorse or promote products derived from this software without specific
//       prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
// NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.


import DS from 'ember-data';


var ElementDefinition = DS.Model.extend({
    path: DS.attr('string'),
    representation: DS.attr('string'),
    name: DS.attr('string'),
    label: DS.attr('string'),
    code: DS.hasMany('coding', {embedded: true}),
    slicing:  DS.belongsTo('element-definition-slicing-component', {embedded: true}),
    short: DS.attr('string'),
    definition: DS.attr('string'),
    comments: DS.attr('string'),
    requirements: DS.attr('string'),
    alias: DS.attr('string'),
    min: DS.attr('number'),
    max: DS.attr('string'),
    base:  DS.belongsTo('element-definition-base-component', {embedded: true}),
    type:  DS.hasMany('element-definition-type-ref-component', {embedded: true}),
    nameReference: DS.attr('string'),
    defaultValueString: DS.attr('string'),
    defaultValueInteger: DS.belongsTo('int32', {embedded: true}),
    defaultValueDateTime: DS.attr('date'),
    defaultValueBoolean: DS.attr('boolean'),
    defaultValueCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    defaultValueRange: DS.belongsTo('range', {embedded: true}),
    meaningWhenMissing: DS.attr('string'),
    fixedString: DS.attr('string'),
    fixedInteger: DS.belongsTo('int32', {embedded: true}),
    fixedDateTime: DS.attr('date'),
    fixedBoolean: DS.attr('boolean'),
    fixedCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    fixedRange: DS.belongsTo('range', {embedded: true}),
    patternString: DS.attr('string'),
    patternInteger: DS.belongsTo('int32', {embedded: true}),
    patternDateTime: DS.attr('date'),
    patternBoolean: DS.attr('boolean'),
    patternCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    patternRange: DS.belongsTo('range', {embedded: true}),
    exampleString: DS.attr('string'),
    exampleInteger: DS.belongsTo('int32', {embedded: true}),
    exampleDateTime: DS.attr('date'),
    exampleBoolean: DS.attr('boolean'),
    exampleCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    exampleRange: DS.belongsTo('range', {embedded: true}),
    minValueString: DS.attr('string'),
    minValueInteger: DS.belongsTo('int32', {embedded: true}),
    minValueDateTime: DS.attr('date'),
    minValueBoolean: DS.attr('boolean'),
    minValueCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    minValueRange: DS.belongsTo('range', {embedded: true}),
    maxValueString: DS.attr('string'),
    maxValueInteger: DS.belongsTo('int32', {embedded: true}),
    maxValueDateTime: DS.attr('date'),
    maxValueBoolean: DS.attr('boolean'),
    maxValueCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    maxValueRange: DS.belongsTo('range', {embedded: true}),
    maxLength: DS.attr('number'),
    condition: DS.attr('string'),
    constraint:  DS.hasMany('element-definition-constraint-component', {embedded: true}),
    mustSupport: DS.attr('boolean'),
    isModifier: DS.attr('boolean'),
    isSummary: DS.attr('boolean'),
    binding:  DS.belongsTo('element-definition-binding-component', {embedded: true}),
    mapping:  DS.hasMany('element-definition-mapping-component', {embedded: true})
});
export default ElementDefinition;
