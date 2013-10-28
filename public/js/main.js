
var alignTitle = function(box){
  var objectMeta = box.children('.list .object-meta'),
      objectName = objectMeta.children('.object-name'),
      objectH = box.height(),
      margin = Math.round(objectH *.5) - 20;
  objectName.css('margin-top', margin);
}

alignTitle($('.object-box'));