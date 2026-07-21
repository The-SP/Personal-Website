/** Section marker: mint label, hairline rule, optional right-aligned count. */
const SectionHeader = ({
  label,
  trailing,
}: {
  label: string;
  trailing?: string;
}) => (
  <header className="flex items-baseline gap-4">
    <span className="section-label">{label}</span>
    <span className="h-px flex-1 bg-rule" />
    {trailing && <span className="meta">{trailing}</span>}
  </header>
);

export default SectionHeader;
