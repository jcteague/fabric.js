(function(){
  fabric.util.object.extend(fabric.StaticCanvas.prototype,{
    crop: function(object, cropPosition){
      if(!object.crop) return;
      object.crop(cropPosition)
      this.renderAll()
    }

  })

})();

