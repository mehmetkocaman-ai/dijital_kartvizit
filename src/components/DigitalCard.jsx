import Avatar from './Avatar'
import InfoItem from './InfoItem'
import SocialButton from './SocialButton'
import SaveButton from './SaveButton'
import { PhoneIcon, MailIcon, WebIcon, MapPinIcon } from '../icons/UIIcons'
import { LinkedInIcon, InstagramIcon, WhatsAppIcon, FacebookIcon } from '../icons/SocialIcons'
import { contactData, generateVCF } from '../data/contact'

const infoItems = [
  {
    icon: <PhoneIcon />,
    label: 'Telefon',
    value: contactData.phone,
    href: `tel:${contactData.phone.replace(/\s/g, '')}`,
  },
  {
    icon: <MailIcon />,
    label: 'E-posta',
    value: contactData.email,
    href: `mailto:${contactData.email}`,
  },
  {
    icon: <WebIcon />,
    label: 'Website',
    value: contactData.websiteLabel,
    href: contactData.website,
  },
  {
    icon: <MapPinIcon />,
    label: 'Adres',
    value: contactData.address,
    href: null,
  },
]

const socialItems = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: contactData.linkedin, color: '#0A66C2' },
  { icon: <InstagramIcon />, label: 'Instagram', href: contactData.instagram, color: '#E1306C' },
  { icon: <WhatsAppIcon />, label: 'WhatsApp', href: contactData.whatsapp, color: '#25D366' },
  { icon: <FacebookIcon />, label: 'Facebook', href: contactData.facebook, color: '#1877F2' },
]

const downloadVCF = () => {
  const vcfContent = generateVCF(contactData)
  const blob = new Blob([vcfContent], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = 'mehmet-kocaman.vcf'
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
  URL.revokeObjectURL(url)
}

const Divider = () => (
  <div
    style={{
      height: 1,
      background:
        'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)',
      margin: '0 2rem',
    }}
  />
)

const DigitalCard = () => {
  return (
    <div
      className="animate-card-in w-full mx-auto"
      style={{ maxWidth: 400 }}
    >
      {/* Glass card */}
      <div
        className="glass-card relative rounded-[28px] overflow-hidden"
      >
        {/* Top gradient accent line */}
        <div
          style={{
            height: 2,
            background:
              'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.8) 20%, rgba(139,92,246,0.9) 50%, rgba(20,184,166,0.7) 80%, transparent 100%)',
          }}
        />

        {/* Header */}
        <div className="text-center px-8 pt-10 pb-6">
          <Avatar initials={contactData.initials} />

          <h1
            className="animate-fade-up-1 font-syne font-bold text-slate-100"
            style={{ fontSize: '1.6rem', letterSpacing: '-0.5px', marginBottom: '0.3rem' }}
          >
            {contactData.name}
          </h1>

          {/* Title badge */}
          <div
            className="animate-fade-up-2 inline-flex items-center gap-1.5 rounded-full"
            style={{
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              padding: '4px 14px',
              fontSize: '0.78rem',
              fontWeight: 500,
              color: '#a5b4fc',
              letterSpacing: '0.4px',
            }}
          >
            <span
              className="animate-dot-pulse rounded-full"
              style={{ width: 6, height: 6, background: '#6366f1', display: 'inline-block' }}
            />
            {contactData.title}
          </div>
        </div>

        <Divider />

        {/* Info items */}
        <div
          className="animate-fade-up-3 flex flex-col"
          style={{ padding: '1.25rem 1.5rem', gap: 2 }}
        >
          {infoItems.map((item, i) => (
            <InfoItem
              key={i}
              icon={item.icon}
              label={item.label}
              value={item.value}
              href={item.href}
            />
          ))}
        </div>

        <Divider />

        {/* Social media */}
        <div
          className="animate-fade-up-4"
          style={{ padding: '0.75rem 1.5rem 1.25rem' }}
        >
          <p
            className="text-center uppercase tracking-widest mb-4"
            style={{
              fontSize: '0.68rem',
              fontWeight: 500,
              color: 'rgba(148, 163, 184, 0.5)',
            }}
          >
            Sosyal Medya
          </p>
          <div className="flex justify-center gap-3">
            {socialItems.map((s, i) => (
              <SocialButton
                key={i}
                icon={s.icon}
                label={s.label}
                href={s.href}
                color={s.color}
              />
            ))}
          </div>
        </div>

        {/* Save button */}
        <div
          className="animate-fade-up-5"
          style={{ padding: '0 1.5rem 1.75rem' }}
        >
          <SaveButton onClick={downloadVCF} />
        </div>
      </div>
    </div>
  )
}

export default DigitalCard
