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


var Observation = DS.Model.extend({
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    category: DS.belongsTo('codeable-concept', {embedded: true}),
    valueQuantity: DS.belongsTo('quantity', {embedded: true}),
    valueCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    valueString: DS.attr('string'),
    valueRange: DS.belongsTo('range', {embedded: true}),
    valueRatio: DS.belongsTo('ratio', {embedded: true}),
    valueSampledData: DS.belongsTo('sampled-data', {embedded: true}),
    valueAttachment: DS.belongsTo('attachment', {embedded: true}),
    valueTime: DS.attr('date'),
    valueDateTime: DS.attr('date'),
    valuePeriod: DS.belongsTo('period', {embedded: true}),
    dataAbsentReason: DS.belongsTo('codeable-concept', {embedded: true}),
    interpretation: DS.belongsTo('codeable-concept', {embedded: true}),
    comments: DS.attr('string'),
    effectiveDateTime: DS.attr('date'),
    effectivePeriod: DS.belongsTo('period', {embedded: true}),
    issued: DS.attr('date'),
    status: DS.attr('string'),
    reliability: DS.attr('string'),
    bodySiteCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    bodySiteReference: DS.belongsTo('reference', {embedded: true}),
    method: DS.belongsTo('codeable-concept', {embedded: true}),
    identifier: DS.hasMany('identifier', {embedded: true}),
    subject: DS.belongsTo('reference', {embedded: true}),
    specimen: DS.belongsTo('reference', {embedded: true}),
    performer: DS.hasMany('reference', {embedded: true}),
    device: DS.belongsTo('reference', {embedded: true}),
    encounter: DS.belongsTo('reference', {embedded: true}),
    referenceRange:  DS.hasMany('observation-reference-range-component', {embedded: true}),
    derivedFrom: DS.hasMany('reference', {embedded: true}),
    related:  DS.hasMany('observation-related-component', {embedded: true}),
    component:  DS.hasMany('observation-component-component', {embedded: true})
});
export default Observation;
