let ctrl = document.getElementById("controls")
     window.onload = function() {
      var drawingCanvas = document.getElementById('canvas');


      if(drawingCanvas && drawingCanvas.getContext) {
         var context = drawingCanvas.getContext('2d');
         var ctx = drawingCanvas.getContext('2d');

         var skintx = new Image();

         ctrl.onchange = function() {

         document.getElementById('uskin').onchange = function(e) {
            skintx.src = URL.createObjectURL(this.files[0]);
            ctx.drawImage(skintx, 0,0);
         };

                //document.getElementById("preview_image").src = drawingCanvas.toDataURL("image/png");

                let opa = document.getElementById("opacity")
                ctrl.style.opacity = opa.value+"%";
                let download = document.getElementById("download")

                let body_checkbox = document.getElementById("Body_checkbox")
                let body_choose = document.getElementById("body_choose")

                let hat_checkbox = document.getElementById("hat_checkbox")
                let hat_choose = document.getElementById("hat_choose")

                let fa_checkbox = document.getElementById("fa_checkbox")
                let fa_choose = document.getElementById("fa_choose")

                let legs_checkbox = document.getElementById("legs_checkbox")
                let legs_choose = document.getElementById("legs_choose")

                let shoes_checkbox = document.getElementById("shoes_checkbox")
                let shoes_choose = document.getElementById("shoes_choose")

                let st_choose = document.getElementById("st_choose")

                let face_c = document.getElementById("face_col")
                let face_r = document.getElementById("face_row")

                let face_checkbox = document.getElementById("face_checkbox")
               ctx.clearRect(0,0,drawingCanvas.width,drawingCanvas.height);

               ctx.drawImage(skintx, 0,0);

               var st_img = new Image();
               st_img.src = st_choose.value;
               ctx.drawImage(st_img,0,0,drawingCanvas.width,drawingCanvas.height);



               if(body_checkbox.checked){
                  var body_img = new Image();
                  body_img.src = body_choose.value;
                  body_choose.style.display = "inline";
                  ctx.drawImage(body_img,0,0,drawingCanvas.width,drawingCanvas.height);
               }else{
                  body_choose.style.display = "none";
               }

               if(hat_checkbox.checked){
                  var hat_img = new Image();
                  hat_img.src = hat_choose.value;
                  hat_choose.style.display = "inline";
                  ctx.drawImage(hat_img,0,0,drawingCanvas.width,drawingCanvas.height);
               }else{
                  hat_choose.style.display = "none";
               }

               if(legs_checkbox.checked){
                  var legs_img = new Image();
                  legs_img.src = legs_choose.value;
                  legs_choose.style.display = "inline";
                  ctx.drawImage(legs_img,0,0,drawingCanvas.width,drawingCanvas.height);
               }else{
                  legs_choose.style.display = "none";
               }

               if(fa_checkbox.checked){
                  var fa_img = new Image();
                  fa_img.src = fa_choose.value;
                  fa_choose.style.display = "inline";
                  ctx.drawImage(fa_img,0,0,drawingCanvas.width,drawingCanvas.height);
               }else{
                  fa_choose.style.display = "none";
               }

               if(shoes_checkbox.checked){
                  var shoes_img = new Image();
                  shoes_img.src = shoes_choose.value;
                  shoes_choose.style.display = "inline";
                  ctx.drawImage(shoes_img,0,0,drawingCanvas.width,drawingCanvas.height);
               }else{
                  shoes_choose.style.display = "none";
               }

               if(face_checkbox.checked){
                  var face_img = new Image();
                  face_img.src = face_choose.value;
                  ctx.drawImage(face_img,face_c.value,face_r.value,8,8,8,8,8,8);
               }

               if(download.checked){
                  //var drawingCanvas = document.getElementById('canvas');
                  var result_img = drawingCanvas.toDataURL("image/png")
                  document.write('<img src="'+result_img+'" id="resultimg"/>sorry for blurry image<style>img{image-rendering: pixelated;}</style>')
                  //<a href="data:image/png;base64,imageb64" download="skin.png" >Download as png</a>
                  var ri = document.getElementById('resultimg')
                  ri.style.border = 'solid'
                  ri.style.width = '512px'
                  ri.style.height = '512px'
                  ri.style.image.rendering = 'pixelated'
               };
         };
      };
   };
//fallout skin update?
