// JavaScript Document

$(function(){
  var division = [
    'Relasi Tahap Persiapan Bersama',
    'Relasi S1 ITB Ganesha',
    'Relasi Jatinangor',
    'Relasi Cirebon',
    'Relasi Pascasarjana dan Humas',
    'Publikasi Dalam Jaringan',
    'Publikasi Luar Jaringan',
    'Kreasi Visual',
    'Kajian Strategis',
    'Analisis Data dan Aspirasi',
	'Manajemen Sumber Daya Anggota'
  ];
	
  

  var bulan = "Mei";

  $('#bulan').text(bulan);

  for(i=0; i<division.length; ++i){
    $('#divisi').append('<option>'+division[i]+'</option>');
  }
  $('select').material_select();

 // https://docs.google.com/forms/d/e/1FAIpQLSeqprEkjYE1oS5Wpi_sNvtZOD_tc1J-yPEZRjp3w411le5r2Q/viewform?usp=sf_link
  //https://docs.google.com/forms/d/e/1FAIpQLScbzFTN7q93MLpTeN3aPizpSlvyvGCJjvnKMxcT_R9I7gaPxw/viewform?usp=sf_link
  $('#real-submit-button').click(function(){
	  var url = "https://docs.google.com/forms/d/e/1FAIpQLSeqprEkjYE1oS5Wpi_sNvtZOD_tc1J-yPEZRjp3w411le5r2Q/formResponse";
    
    var form = $('#main-form');
    form.attr('action', url);
    form.html('');
    
    form.append('<input type="text" name="' + formEntries.nim + '" value="' + $('#nim').val() + '">');
      form.append('<input type="text" name="' + formEntries.nama + '" value="' + $('#name').val() + '">');
      form.append('<input type="text" name="' + formEntries.tempatlahir + '" value="' + $('#tempatLahir').val() + '">');
      form.append('<input type="text" name="' + formEntries.tanggallahir + '" value="' + $('#tanggalLahir').val() + '">');
      form.append('<input type="text" name="' + formEntries.notelp + '" value="&#39;' + $('#nomorTelepon').val() + '">');
      form.append('<input type="text" name="' + formEntries.notelpdarurat + '" value="&#39;' + $('#noDarurat').val() + '">');
      form.append('<input type="text" name="' + formEntries.pemilikdarurat + '" value="' + $('#pihakDarurat').val() + '">');
      form.append('<input type="text" name="' + formEntries.email + '" value="' + $('#email').val() + '">');
      form.append('<input type="text" name="' + formEntries.alamat + '" value="' + $('#alamat').val() + '">');
      form.append('<input type="text" name="' + formEntries.idline + '" value="' + $('#idLine').val() + '">');
      form.append('<input type="text" name="' + formEntries.penyakit + '" value="' + $('#penyakit').val() + '">');
      form.append('<input type="text" name="' + formEntries.kendaraan + '" value="' + $('#kendaraan').val() + '">');
      form.append('<input type="text" name="' + formEntries.keahlian + '" value="' + $('#keahlian').val() + '">');
      form.append('<input type="text" name="' + formEntries.organisasi + '" value="' + $('#organisasi').val() + '">');
      form.append('<input type="text" name="' + formEntries.kepanitiaan + '" value="' + $('#kepanitiaan').val() + '">');
      form.append('<input type="text" name="' + formEntries.kesibukan + '" value="' + $('#kesibukan').val() + '">');
    
      $('.division-item').each(function(i, e) {
            if(i<3) form.append('<input type="text" name="' + formEntries.divisi[i] + '" value="' + $(e).data('division') + '">');
      });

      for (i = 1; i <= 3; ++i) {
            form.append('<input type="text" name="' + formEntries.alasan[i-1] + '" value="' + $('#reason' + i).val() + '">');
      }
      form.append('<input type="text" name="' + formEntries.tentangmwawm + '" value="' + $('#tentangmwawm').val() + '">');

      form.append('<input type="text" name="' + formEntries.tentangdiri + '" value="' + $('#tentangdiri').val() + '">');

      form.submit();    
  });
  
  particlesJS("particles-js",{
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#1e00ff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 125,
        "color": "#f10e01",
        "opacity": 0.5,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "top-right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 180,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});