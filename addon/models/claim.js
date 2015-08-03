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


var Claim = DS.Model.extend({
    type: DS.attr('string'),
    identifier: DS.hasMany('identifier', {embedded: true}),
    ruleset: DS.belongsTo('coding', {embedded: true}),
    originalRuleset: DS.belongsTo('coding', {embedded: true}),
    created: DS.attr('date'),
    target: DS.belongsTo('reference', {embedded: true}),
    provider: DS.belongsTo('reference', {embedded: true}),
    organization: DS.belongsTo('reference', {embedded: true}),
    use: DS.attr('string'),
    priority: DS.belongsTo('coding', {embedded: true}),
    fundsReserve: DS.belongsTo('coding', {embedded: true}),
    enterer: DS.belongsTo('reference', {embedded: true}),
    facility: DS.belongsTo('reference', {embedded: true}),
    prescription: DS.belongsTo('reference', {embedded: true}),
    originalPrescription: DS.belongsTo('reference', {embedded: true}),
    payee:  DS.belongsTo('claim-payee-component', {embedded: true}),
    referral: DS.belongsTo('reference', {embedded: true}),
    diagnosis:  DS.hasMany('claim-diagnosis-component', {embedded: true}),
    condition: DS.hasMany('coding', {embedded: true}),
    patient: DS.belongsTo('reference', {embedded: true}),
    coverage:  DS.hasMany('claim-coverage-component', {embedded: true}),
    exception: DS.hasMany('coding', {embedded: true}),
    school: DS.attr('string'),
    accident: DS.attr('date'),
    accidentType: DS.belongsTo('coding', {embedded: true}),
    interventionException: DS.hasMany('coding', {embedded: true}),
    item:  DS.hasMany('claim-items-component', {embedded: true}),
    additionalMaterials: DS.hasMany('coding', {embedded: true}),
    missingTeeth:  DS.hasMany('claim-missing-teeth-component', {embedded: true})
});
export default Claim;
