package signing

import (
	signingv1beta1 "cosmossdk.io/api/cosmos/tx/signing/v1beta1"
	txv1beta1 "cosmossdk.io/api/cosmos/tx/v1beta1"
	"google.golang.org/protobuf/types/known/anypb"
)

// SignModeHandler defines an interface to be implemented by types which will handle
// SignMode's by generating sign bytes from a Tx and SignerData
type SignModeHandler interface {
	Mode() signingv1beta1.SignMode

	// GetSignBytes returns the sign bytes for the provided SignMode, SignerData and Tx,
	// or an error
	GetSignBytes(mode signingv1beta1.SignMode, data SignerData, tx *txv1beta1.Tx) ([]byte, error)
}

// SignerData is the specific information needed to sign a transaction that generally
// isn't included in the transaction body itself
type SignerData struct {
	// The address of the signer.
	//
	// In case of multisigs, this should be the multisig's address.
	Address string

	// ChainID is the chain that this transaction is targeted
	ChainID string

	// AccountNumber is the account number of the signer.
	//
	// In case of multisigs, this should be the multisig account number.
	AccountNumber uint64

	// Sequence is the account sequence number of the signer that is used
	// for replay protection. This field is only useful for Legacy Amino signing,
	// since in SIGN_MODE_DIRECT the account sequence is already in the signer
	// info.
	//
	// In case of multisigs, this should be the multisig sequence.
	Sequence uint64

	// PubKey is the public key of the signer.
	//
	// In case of multisigs, this should be the pubkey of the member of the
	// multisig that is signing the current sign doc.
	PubKey *anypb.Any
}
