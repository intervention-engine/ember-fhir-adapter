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


var Procedure = DS.Model.extend({
    identifier: DS.hasMany('identifier', {embedded: true}),
    subject: DS.belongsTo('reference', {embedded: true}),
    status: DS.attr('string'),
    category: DS.belongsTo('codeable-concept', {embedded: true}),
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    notPerformed: DS.attr('boolean'),
    reasonNotPerformed: DS.hasMany('codeable-concept', {embedded: true}),
    bodySite: DS.hasMany('codeable-concept', {embedded: true}),
    reasonCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    reasonReference: DS.belongsTo('reference', {embedded: true}),
    performer:  DS.hasMany('procedure-performer-component', {embedded: true}),
    performedDateTime: DS.attr('date'),
    performedPeriod: DS.belongsTo('period', {embedded: true}),
    encounter: DS.belongsTo('reference', {embedded: true}),
    location: DS.belongsTo('reference', {embedded: true}),
    outcome: DS.belongsTo('codeable-concept', {embedded: true}),
    report: DS.hasMany('reference', {embedded: true}),
    complication: DS.hasMany('codeable-concept', {embedded: true}),
    followUp: DS.hasMany('codeable-concept', {embedded: true}),
    request: DS.belongsTo('reference', {embedded: true}),
    notes: DS.hasMany('annotation', {embedded: true}),
    focalDevice:  DS.hasMany('procedure-focal-device-component', {embedded: true}),
    used: DS.hasMany('reference', {embedded: true})
});
export default Procedure;
