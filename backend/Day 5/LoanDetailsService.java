package com.admission.demo.Service;

import com.admission.demo.Model.LoanDetails;
import com.admission.demo.Repository.LoanDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoanDetailsService {

    @Autowired
    private LoanDetailsRepository loanDetailsRepository;

    public List<LoanDetails> getAllLoanDetails() {
        return loanDetailsRepository.findAll();
    }

    public Optional<LoanDetails> getLoanDetailsById(Long id) {
        return loanDetailsRepository.findById(id);
    }

    public LoanDetails createLoanDetails(LoanDetails loanDetails) {
        return loanDetailsRepository.save(loanDetails);
    }

    public LoanDetails updateLoanDetails(Long id, LoanDetails updatedLoanDetails) {
        Optional<LoanDetails> loanDetailsOptional = loanDetailsRepository.findById(id);
        if (loanDetailsOptional.isPresent()) {
            updatedLoanDetails.setId(id);
            return loanDetailsRepository.save(updatedLoanDetails);
        } else {
            throw new RuntimeException("Loan details not found");
        }
    }

    public void deleteLoanDetails(Long id) {
        loanDetailsRepository.deleteById(id);
    }
}
