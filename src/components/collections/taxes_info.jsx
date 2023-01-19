export default function TaxesInfo({ hasDiscount }) {
  return (
    <div>
      <h1>These are your taxes</h1>
      {hasDiscount && (
        <p className="tax-discount" data-testid="tax-discount">
          YOU DO NOT HAVE TO PAY ANY TAXES
        </p>
      )}
    </div>
  )
}
