// function simpleFade() {
//     this.delay = 10000;
//     this.arMessage = [];
//     this.msgIdx = 0;
//     this.fadeElem;
//     this.fadeElemName = "fadeElem0";
//     this.msgLen = 0;
//     this.to_id = 0;
//     this.c = 0;
// }
//
// //reset all of the properties of the object
// simpleFade.prototype.resetContent = function() {
// 	this.arMessage.splice(1, this.msgLen);
// 	this.msgLen = 0;
// 	this.msgIdx = 0;
// 	this.elIdx = 0;
// 	this.c = 0;
// }
//
// //call this function to add content
// simpleFade.prototype.addContent = function(_txt) {
// 	this.arMessage[this.c++] = _txt;
// }
//
// //this function is used to set how long each page is visible for
// simpleFade.prototype.setDelay = function(_delay) {
// 	this.delay = _delay;
// }
//
// //this is the element id tp update with the content
// simpleFade.prototype.setElem = function(_elem) {
// 	this.fadeElemName = _elem;
// }
//
// //this starts the fading process
// simpleFade.prototype.startFade = function() {
//         this.msgLen = this.arMessage.length;
//
//         this.fadeElem = document.getElementById(this.fadeElemName);
//         clearInterval(this.to_id);
//
//         //http://bytes.com/groups/javascript/152277-help-using-setinterval-within-object-function
//         let oInstance=this;
//         this.to_id = setInterval(function(){oInstance.fadeMsg()}, this.delay);
//
//         this.fadeMsg();
// }
//
// //change the content
// simpleFade.prototype.fadeMsg = function() {
//         if (this.msgIdx === this.msgLen) {
//             this.msgIdx = 0;
//         }
//
//         this.fadeElem.innerHTML = this.arMessage[this.msgIdx];
//         this.msgIdx++;
// }