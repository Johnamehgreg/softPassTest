import { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { faitAmount } from '../../constanst/AmountFunction';
import { useGetWalletHook } from '../../pages/home/pages/Wallet.tsx/wallet-query-hook';


interface Props {
    showisFundWallet:Function;
}



const AppBalanceCard:React.FC<Props> = ({showisFundWallet}) => {

    const [amountBalance, setamountBalance] = useState(0)


    const onError = () => {
       
    
      }


    const {

        data,
        isFetched,
        isError: isErrorData,
        isSuccess: isDataSuccess,
        isFetching,
        refetch
      } = useGetWalletHook({ onError })

      const checkSuccess = () => {

        if (isFetched && isDataSuccess) {
         
          setamountBalance(data?.data?.balance)

        }
      }
    
    
      useEffect(() => {
        checkSuccess()
      }, [data])

  return (
    <div className="wallet-container">
    <div className="">
      <b className="text-[12px] font-normal block">Total Wallet Balance</b>
      <CurrencyFormat
        value={amountBalance}
        displayType={'text'}
        thousandSeparator={true}
       
        renderText={value => {
          return (
            <span className="font-semibold text-softpasspurple-300 text-[18px]">
              <span>&#8358;</span>
              {
                faitAmount(`${value}`)
              }
              
            </span>
          )
        }} />

    </div>
    <div>
      <button
        onClick={() => {
          showisFundWallet()
          console.log("clicked-wallet")
        }}
        className="text-[12px] bg-softpasspurple-300 text-white whitespace-nowrap p-2 py-1 pb-[5px] rounded-md">
        Fund Wallet
      </button>
    </div>
  </div>
  )
}

export default AppBalanceCard
