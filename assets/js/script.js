// <!-- Début partie Mickael -->
//bouton dossier
function openfolder() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf114;";
  setTimeout(function () {
    a.innerHTML = "&#xf115;";
  }, 1000);
}
//slide
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 3 seconds
}

$(function() {
 	$("#css3dimagePager li").click(function(){
		var rotateY = ($(this).index() * -90);
		$("#css3dimageslider ul").css({"-webkit-transform":"rotateY("+rotateY+"deg)", "-moz-transform":"rotateY("+rotateY+"deg)", "-ms-transform":"rotateY("+rotateY+"deg)", "transform":"rotateY("+rotateY+"deg)"});
		$("#css3dimagePager li").removeClass("active");
		$(this).addClass("active");
	});
 	$("#css3dtransparency").click(function() {
		$("#css3dimageslider").toggleClass("transparency");
		$(this).toggleClass("active");
	});
 });

// <!-- Fin partie Mickael -->
// <!-- Début partie Benoit -->

// <!-- Fin partie Benoit -->
// <!-- Début partie Fa -->

// <!-- Fin partie Fa -->
// <!-- Début partie Khoursa-->
$(function(){
	//Produit1
	$('#produit1').click(function(){
		//changement quantité
		$("#ajouter1").click(function(){
			var valeur = $("#nombreClick1").val();
			valeur++;
			var nvPrix = price * valeur;
			$("#nombreClick1").val(valeur);
			$('#totalPrice1').text(nvPrix);
		});
		$("#retirer1").click(function(){
			var valeur = $("#nombreClick1").val();
			valeur--;
			var nvPrix = price * valeur;
			$("#nombreClick1").val(valeur);
			$('#totalPrice1').text(nvPrix);
		});
		//enlever le produit
		$('#rmv1').click(function(){
			$('#tr1').removeClass("show").addClass("hidden");
		})
		//début variable
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#nombreClick1').val();
		var result = price * qt;
		//change la valeur de #art par name
		$('#art1').text(name);
		//change la valeur de #price par price
		$('#price1').text(price);
		//cahnge la valeur de #totalPrice par result
		$('#totalPrice1').text(result);
		//enleve la classe hidden et ajoute la classe show, de base la classe hidden n'y est pas
		$('#tr1').removeClass("hidden").addClass("show");
		// enleve l'attribut hidden qui permert de cacher de base le tr
		$('#tr1').removeAttr('hidden');
	})
	//Produit2
	$('#produit2').click(function(){
		//changement quantité
		$("#ajouter2").click(function(){
			var valeur = $("#nombreClick2").val();
			valeur++;
			var nvPrix = price * valeur;
			$("#nombreClick2").val(valeur);
			$('#totalPrice2').text(nvPrix);
		});
		$("#retirer2").click(function(){
			var valeur = $("#nombreClick2").val();
			valeur--;
			var nvPrix = price * valeur;
			$("#nombreClick2").val(valeur);
			$('#totalPrice2').text(nvPrix);
		});
		//enlever le produit
		$('#rmv2').click(function(){
			$('#tr2').removeClass("show").addClass("hidden");
		})
		//début variable
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#nombreClick2').val();
		var result = price * qt;
		//change la valeur de #art par name
		$('#art2').text(name);
		//change la valeur de #price par price
		$('#price2').text(price);
		//cahnge la valeur de #totalPrice par result
		$('#totalPrice2').text(result);
		//enleve la classe hidden et ajoute la classe show, de base la classe hidden n'y est pas
		$('#tr2').removeClass("hidden").addClass("show");
		// enleve l'attribut hidden qui permert de cacher de base le tr
		$('#tr2').removeAttr('hidden');
	})
	//Produit3
	$('#produit3').click(function(){
		//changement quantité
		$("#ajouter3").click(function(){
			var valeur = $("#nombreClick3").val();
			valeur++;
			var nvPrix = price * valeur;
			$("#nombreClick3").val(valeur);
			$('#totalPrice3').text(nvPrix);
		});
		$("#retirer3").click(function(){
			var valeur = $("#nombreClick3").val();
			valeur--;
			var nvPrix = price * valeur;
			$("#nombreClick3").val(valeur);
			$('#totalPrice3').text(nvPrix);
		});
		//enlever le produit
		$('#rmv3').click(function(){
			$('#tr3').removeClass("show").addClass("hidden");
		})
		//début variable
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#nombreClick3').val();
		var result = price * qt;
		//change la valeur de #art par name
		$('#art3').text(name);
		//change la valeur de #price par price
		$('#price3').text(price);
		//cahnge la valeur de #totalPrice par result
		$('#totalPrice3').text(result);
		//enleve la classe hidden et ajoute la classe show, de base la classe hidden n'y est pas
		$('#tr3').removeClass("hidden").addClass("show");
		// enleve l'attribut hidden qui permert de cacher de base le tr
		$('#tr3').removeAttr('hidden');
	})
	//Produit4
	$('#produit4').click(function(){
		//changement quantité
		$("#ajouter4").click(function(){
			var valeur = $("#nombreClick4").val();
			valeur++;
			var nvPrix = price * valeur;
			$("#nombreClick4").val(valeur);
			$('#totalPrice4').text(nvPrix);
		});
		$("#retirer4").click(function(){
			var valeur = $("#nombreClick4").val();
			valeur--;
			var nvPrix = price * valeur;
			$("#nombreClick4").val(valeur);
			$('#totalPrice4').text(nvPrix);
		});
		//enlever le produit
		$('#rmv4').click(function(){
			$('#tr4').removeClass("show").addClass("hidden");
		})
		//début variable
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#nombreClick4').val();
		var result = price * qt;
		//change la valeur de #art par name
		$('#art4').text(name);
		//change la valeur de #price par price
		$('#price4').text(price);
		//cahnge la valeur de #totalPrice par result
		$('#totalPrice4').text(result);
		//enleve la classe hidden et ajoute la classe show, de base la classe hidden n'y est pas
		$('#tr4').removeClass("hidden").addClass("show");
		// enleve l'attribut hidden qui permert de cacher de base le tr
		$('#tr4').removeAttr('hidden');
	})
	//Produit5
	$('#produit5').click(function(){
		//changement quantité
		$("#ajouter5").click(function(){
			var valeur = $("#nombreClick5").val();
			valeur++;
			var nvPrix = price * valeur;
			$("#nombreClick5").val(valeur);
			$('#totalPrice5').text(nvPrix);
		});
		$("#retirer5").click(function(){
			var valeur = $("#nombreClick5").val();
			valeur--;
			var nvPrix = price * valeur;
			$("#nombreClick5").val(valeur);
			$('#totalPrice5').text(nvPrix);
		});
		//enlever le produit
		$('#rmv5').click(function(){
			$('#tr5').removeClass("show").addClass("hidden");
		})
		//début variable
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#nombreClick5').val();
		var result = price * qt;
		//change la valeur de #art par name
		$('#art5').text(name);
		//change la valeur de #price par price
		$('#price5').text(price);
		//cahnge la valeur de #totalPrice par result
		$('#totalPrice5').text(result);
		//enleve la classe hidden et ajoute la classe show, de base la classe hidden n'y est pas
		$('#tr5').removeClass("hidden").addClass("show");
		// enleve l'attribut hidden qui permert de cacher de base le tr
		$('#tr5').removeAttr('hidden');
	})
	//Produit6
	$('#produit6').click(function(){
		//changement quantité
		$("#ajouter6").click(function(){
			var valeur = $("#nombreClick6").val();
			valeur++;
			var nvPrix = price * valeur;
			$("#nombreClick6").val(valeur);
			$('#totalPrice6').text(nvPrix);
		});
		$("#retirer6").click(function(){
			var valeur = $("#nombreClick6").val();
			valeur--;
			var nvPrix = price * valeur;
			$("#nombreClick6").val(valeur);
			$('#totalPrice6').text(nvPrix);
		});
		//enlever le produit
		$('#rmv6').click(function(){
			$('#tr6').removeClass("show").addClass("hidden");
		})
		//début variable
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#nombreClick6').val();
		var result = price * qt;
		//change la valeur de #art par name
		$('#art6').text(name);
		//change la valeur de #price par price
		$('#price6').text(price);
		//cahnge la valeur de #totalPrice par result
		$('#totalPrice6').text(result);
		//enleve la classe hidden et ajoute la classe show, de base la classe hidden n'y est pas
		$('#tr6').removeClass("hidden").addClass("show");
		// enleve l'attribut hidden qui permert de cacher de base le tr
		$('#tr6').removeAttr('hidden');
	})
	//Produit7
	$('#produit7').click(function(){
		//changement quantité
		$("#ajouter7").click(function(){
			var valeur = $("#nombreClick7").val();
			valeur++;
			var nvPrix = price * valeur;
			$("#nombreClick7").val(valeur);
			$('#totalPrice7').text(nvPrix);
		});
		$("#retirer7").click(function(){
			var valeur = $("#nombreClick7").val();
			valeur--;
			var nvPrix = price * valeur;
			$("#nombreClick7").val(valeur);
			$('#totalPrice7').text(nvPrix);
		});
		//enlever le produit
		$('#rmv7').click(function(){
			$('#tr7').removeClass("show").addClass("hidden");
		})
		//début variable
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#nombreClick7').val();
		var result = price * qt;
		//change la valeur de #art par name
		$('#art7').text(name);
		//change la valeur de #price par price
		$('#price7').text(price);
		//cahnge la valeur de #totalPrice par result
		$('#totalPrice7').text(result);
		//enleve la classe hidden et ajoute la classe show, de base la classe hidden n'y est pas
		$('#tr7').removeClass("hidden").addClass("show");
		// enleve l'attribut hidden qui permert de cacher de base le tr
		$('#tr7').removeAttr('hidden');
	})
	//Produit8
	$('#produit8').click(function(){
		//changement quantité
		$("#ajouter8").click(function(){
			var valeur = $("#nombreClick8").val();
			valeur++;
			var nvPrix = price * valeur;
			$("#nombreClick8").val(valeur);
			$('#totalPrice8').text(nvPrix);
		});
		$("#retirer8").click(function(){
			var valeur = $("#nombreClick8").val();
			valeur--;
			var nvPrix = price * valeur;
			$("#nombreClick8").val(valeur);
			$('#totalPrice8').text(nvPrix);
		});
		//enlever le produit
		$('#rmv8').click(function(){
			$('#tr8').removeClass("show").addClass("hidden");
		})
		//début variable
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#nombreClick8').val();
		var result = price * qt;
		//change la valeur de #art par name
		$('#art8').text(name);
		//change la valeur de #price par price
		$('#price8').text(price);
		//cahnge la valeur de #totalPrice par result
		$('#totalPrice8').text(result);
		//enleve la classe hidden et ajoute la classe show, de base la classe hidden n'y est pas
		$('#tr8').removeClass("hidden").addClass("show");
		// enleve l'attribut hidden qui permert de cacher de base le tr
		$('#tr8').removeAttr('hidden');
	})
	//Produit9
	$('#produit9').click(function(){
		//changement quantité
		$("#ajouter9").click(function(){
			var valeur = $("#nombreClick9").val();
			valeur++;
			var nvPrix = price * valeur;
			$("#nombreClick9").val(valeur);
			$('#totalPrice9').text(nvPrix);
		});
		$("#retirer9").click(function(){
			var valeur = $("#nombreClick9").val();
			valeur--;
			var nvPrix = price * valeur;
			$("#nombreClick9").val(valeur);
			$('#totalPrice9').text(nvPrix);
		});
		//enlever le produit
		$('#rmv9').click(function(){
			$('#tr9').removeClass("show").addClass("hidden");
		})
		//début variable
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#nombreClick9').val();
		var result = price * qt;
		//change la valeur de #art par name
		$('#art9').text(name);
		//change la valeur de #price par price
		$('#price9').text(price);
		//cahnge la valeur de #totalPrice par result
		$('#totalPrice9').text(result);
		//enleve la classe hidden et ajoute la classe show, de base la classe hidden n'y est pas
		$('#tr9').removeClass("hidden").addClass("show");
		// enleve l'attribut hidden qui permert de cacher de base le tr
		$('#tr9').removeAttr('hidden');
	})
	//Produit10
	$('#produit10').click(function(){
		//changement quantité
		$("#ajouter10").click(function(){
			var valeur = $("#nombreClick10").val();
			valeur++;
			var nvPrix = price * valeur;
			$("#nombreClick10").val(valeur);
			$('#totalPrice10').text(nvPrix);
		});
		$("#retirer10").click(function(){
			var valeur = $("#nombreClick10").val();
			valeur--;
			var nvPrix = price * valeur;
			$("#nombreClick10").val(valeur);
			$('#totalPrice10').text(nvPrix);
		});
		//enlever le produit
		$('#rmv10').click(function(){
			$('#tr10').removeClass("show").addClass("hidden");
		})
		//début variable
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#nombreClick10').val();
		var result = price * qt;
		//change la valeur de #art par name
		$('#art10').text(name);
		//change la valeur de #price par price
		$('#price10').text(price);
		//cahnge la valeur de #totalPrice par result
		$('#totalPrice10').text(result);
		//enleve la classe hidden et ajoute la classe show, de base la classe hidden n'y est pas
		$('#tr10').removeClass("hidden").addClass("show");
		// enleve l'attribut hidden qui permert de cacher de base le tr
		$('#tr10').removeAttr('hidden');
	})
	//Produit11
	$('#produit11').click(function(){
		//changement quantité
		$("#ajouter11").click(function(){
			var valeur = $("#nombreClick11").val();
			valeur++;
			var nvPrix = price * valeur;
			$("#nombreClick11").val(valeur);
			$('#totalPrice11').text(nvPrix);
		});
		$("#retirer11").click(function(){
			var valeur = $("#nombreClick11").val();
			valeur--;
			var nvPrix = price * valeur;
			$("#nombreClick11").val(valeur);
			$('#totalPrice11').text(nvPrix);
		});
		//enlever le produit
		$('#rmv11').click(function(){
			$('#tr11').removeClass("show").addClass("hidden");
		})
		//début variable
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#nombreClick11').val();
		var result = price * qt;
		//change la valeur de #art par name
		$('#art11').text(name);
		//change la valeur de #price par price
		$('#price11').text(price);
		//cahnge la valeur de #totalPrice par result
		$('#totalPrice11').text(result);
		//enleve la classe hidden et ajoute la classe show, de base la classe hidden n'y est pas
		$('#tr11').removeClass("hidden").addClass("show");
		// enleve l'attribut hidden qui permert de cacher de base le tr
		$('#tr11').removeAttr('hidden');
	})
	//Produit12
	$('#produit12').click(function(){
		//changement quantité
		$("#ajouter12").click(function(){
			var valeur = $("#nombreClick12").val();
			valeur++;
			var nvPrix = price * valeur;
			$("#nombreClick12").val(valeur);
			$('#totalPrice12').text(nvPrix);
		});
		$("#retirer12").click(function(){
			var valeur = $("#nombreClick12").val();
			valeur--;
			var nvPrix = price * valeur;
			$("#nombreClick12").val(valeur);
			$('#totalPrice12').text(nvPrix);
		});
		//enlever le produit
		$('#rmv12').click(function(){
			$('#tr12').removeClass("show").addClass("hidden");
		})
		//début variable
		var $this = $(this);
		var id = $this.attr('data-id');
		var name = $this.attr('data-name');
		var price = $this.attr('data-price');
		var qt = $('#nombreClick12').val();
		var result = price * qt;
		//change la valeur de #art par name
		$('#art12').text(name);
		//change la valeur de #price par price
		$('#price12').text(price);
		//cahnge la valeur de #totalPrice par result
		$('#totalPrice12').text(result);
		//enleve la classe hidden et ajoute la classe show, de base la classe hidden n'y est pas
		$('#tr12').removeClass("hidden").addClass("show");
		// enleve l'attribut hidden qui permert de cacher de base le tr
		$('#tr12').removeAttr('hidden');
	})
})
function payer(){
  var zehfrezioh = alert("Procedure de paiement en cours d'initialisation...")
}
