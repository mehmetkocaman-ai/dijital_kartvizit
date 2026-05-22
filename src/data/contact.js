export const contactData = {
  name: 'Mehmet Kocaman',
  title: 'Bilgisayar Mühendisi',
  initials: 'MK',
  phone: '+90 534 240 4123',
  email: 'mehmetkocaman@kutahya.bel.tr',
  website: 'www.mehmetkocaman.com',
  websiteLabel: 'mehmetkocaman.com',
  address: 'Kütahya Belediyesi, Bilgi İşlem Müdürlüğü',
  linkedin: 'https://linkedin.com/in/mehmet-kocaman-08296a5b',
  instagram: 'https://instagram.com/mehmetkocamantc',
  whatsapp: 'https://wa.me/905342404123',
  facebook: 'https://facebook.com/mehmetkocaman20',
}

export const generateVCF = (data) => {
  return `BEGIN:VCARD
VERSION:3.0
N:Kocaman;Mehmet;;;
FN:${data.name}
TITLE:${data.title}
ORG:Kişisel Dijital Kartvizit
TEL;TYPE=CELL,VOICE:${data.phone}
EMAIL;TYPE=INTERNET:${data.email}
URL:${data.website}
ADR;TYPE=WORK:;;${data.address};;;;
NOTE:Bilgisayar Mühendisi | Dijital Kartvizit
X-SOCIALPROFILE;TYPE=linkedin:${data.linkedin}
X-SOCIALPROFILE;TYPE=instagram:${data.instagram}
X-SOCIALPROFILE;TYPE=facebook:${data.facebook}
END:VCARD`
}
