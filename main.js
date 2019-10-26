$(function() {
  $('#znaky > div').draggable({});
  $('#znaky').droppable({
    drop: function(event, ui) {
      removeClasses(event, ui);
    }
  });

  
  function removeClasses(event, ui) {
    const elementClasses = Array.from(event.toElement.classList);
    if (elementClasses.includes('police')) {
      $(ui.draggable).removeClass('police');
      dropolice();
    } else if (elementClasses.includes('kos')) {
      $(ui.draggable).removeClass('kos');
      dropnutokos();
    } else {
      $(ui.draggable).removeClass('mix');
      dropol();
    }
  }

  // Koš

  $('#kos').droppable({
    drop: function(event, ui) {
      removeClasses(event, ui);
      $(ui.draggable).addClass('kos');
      dropnutokos();
    }
  });
  function dropnutokos() {
    var pismenka = [];
    $('.kos').each(function() {
      var pismenko = $(this).attr('data-sub1');
      pismenka.push(pismenko);
    });
    console.log('kos', pismenka.join(''));
    var slovo = pismenka.join('');

    if (slovo === 'abc') {
      $('#oko2_a').css('visibility', 'visible');
      $('#oko_a').css('visibility', 'hidden');
      $('#oko1_a').css('visibility', 'hidden');
      $('#kos').css('border', 'solid 10px black');
    } else if (slovo === 'aabb') {
      $('#oko1_a').css('visibility', 'visible');
      $('#oko2_a').css('visibility', 'hidden');
      $('#oko_a').css('visibility', 'hidden');
      $('#kos').css('border', 'dashed 10px black');
    } else if (slovo === 'acc') {
      $('#oko1_a').css('visibility', 'visible');
      $('#oko2_a').css('visibility', 'visible');
      $('#oko_a').css('visibility', 'visible');
      $('#kos').css('border', 'dotted 10px black');
    } else if (slovo === 'aab') {
      $('#oko_a').css('visibility', 'visible');
      $('#oko1_a').css('visibility', 'hidden');
      $('#oko2_a').css('visibility', 'hidden');
      $('#kos').css('border', 'double 10px black');
    } else {
      $('#oko_a,#oko1_a,#oko2_a').css('visibility', 'hidden');
      $('#kos').css('border', 'dashed 3px black');
    }
  }

  // Police

  $('#police').droppable({
    drop: function(event, ui) {
      removeClasses(event, ui);
      $(ui.draggable).addClass('police');
      dropolice();
    }
  });

  function dropolice() {
    var pisenka = new Array();
    $('.police').each(function() {
      var pisenko = $(this).attr('data-sub1');
      pisenka.push(pisenko);
    });
    console.log('police', pisenka.join(''));
    pisenka.sort();
    var slov = pisenka.join('');

    if (slov === 'abc') {
      $('#oko2').css('visibility', 'visible');
      $('#oko').css('visibility', 'hidden');
      $('#oko1').css('visibility', 'hidden');
      $('#police').css('border', 'solid 10px red');
    } else if (slov === 'aabb') {
      $('#oko1').css('visibility', 'visible');
      $('#oko2').css('visibility', 'hidden');
      $('#oko').css('visibility', 'hidden');
      $('#police').css('border', 'dashed 10px red');
    } else if (slov === 'acc') {
      $('#oko1').css('visibility', 'visible');
      $('#oko2').css('visibility', 'visible');
      $('#oko').css('visibility', 'visible');
      $('#police').css('border', 'dotted 10px red');
    } else if (slov === 'aab') {
      $('#oko').css('visibility', 'visible');
      $('#oko1').css('visibility', 'hidden');
      $('#oko2').css('visibility', 'hidden');
      $('#police').css('border', 'double 10px red');
    } else {
      $('#oko,#oko1,#oko2').css('visibility', 'hidden');
      $('#police').css('border', 'dashed 2px red');
    }
  }

  // Mix

  $('#mix').droppable({
    drop: function(event, ui) {
      removeClasses(event, ui);
      $(ui.draggable).addClass('mix');
      dropol();
    }
  });

  function dropol() {
    var pisnka = new Array();
    $('.mix').each(function() {
      var pisnko = $(this).attr('data-sub1');
      pisnka.push(pisnko);
    });
    console.log('mix', pisnka.join(''));
    pisnka.sort();
    var slovy = pisnka.join('');

    if (slovy === 'abc') {
      $('#oko2_a2').css('visibility', 'visible');
      $('#oko_a2').css('visibility', 'hidden');
      $('#oko1_a2').css('visibility', 'hidden');
      $('#mix').css('border', 'solid 10px blue');
    } else if (slovy === 'aabb') {
      $('#oko1_a2').css('visibility', 'visible');
      $('#oko2_a2').css('visibility', 'hidden');
      $('#oko_a2').css('visibility', 'hidden');
      $('#mix').css('border', 'dashed 10px blue');
    } else if (slovy === 'acc') {
      $('#oko1_a2').css('visibility', 'visible');
      $('#oko2_a2').css('visibility', 'visible');
      $('#oko_a2').css('visibility', 'visible');
      $('#mix').css('border', 'dotted 10px blue');
    } else if (slovy === 'aab') {
      $('#oko_a2').css('visibility', 'visible');
      $('#oko1_a2').css('visibility', 'hidden');
      $('#oko2_a2').css('visibility', 'hidden');
      $('#mix').css('border', 'double 10px blue');
    } else {
      $('#oko_a2,#oko1_a2,#oko2_a2').css('visibility', 'hidden');
      $('#mix').css('border', 'dashed 3px blue');
    }
  }
});
