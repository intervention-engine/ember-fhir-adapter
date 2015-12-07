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


var Condition = DS.Model.extend({
    identifier: DS.hasMany('identifier', {embedded: true}),
    patient: DS.belongsTo('reference', {embedded: true}),
    encounter: DS.belongsTo('reference', {embedded: true}),
    asserter: DS.belongsTo('reference', {embedded: true}),
    dateRecorded: DS.attr('date'),
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    category: DS.belongsTo('codeable-concept', {embedded: true}),
    clinicalStatus: DS.attr('string'),
    verificationStatus: DS.attr('string'),
    severity: DS.belongsTo('codeable-concept', {embedded: true}),
    onsetDateTime: DS.attr('date'),
    onsetAge: DS.belongsTo('quantity', {embedded: true}),
    onsetPeriod: DS.belongsTo('period', {embedded: true}),
    onsetRange: DS.belongsTo('range', {embedded: true}),
    onsetString: DS.attr('string'),
    abatementDateTime: DS.attr('date'),
    abatementAge: DS.belongsTo('quantity', {embedded: true}),
    abatementBoolean: DS.attr('nullable-boolean', {default:null}),
    abatementPeriod: DS.belongsTo('period', {embedded: true}),
    abatementRange: DS.belongsTo('range', {embedded: true}),
    abatementString: DS.attr('string'),
    stage:  DS.belongsTo('condition-stage-component', {embedded: true}),
    evidence:  DS.hasMany('condition-evidence-component', {embedded: true}),
    bodySite: DS.hasMany('codeable-concept', {embedded: true}),
    notes: DS.attr('string')
});
export default Condition;
