package com.admission.demo.Controller;

import com.admission.demo.Model.LoanDetails;
import com.admission.demo.Service.LoanDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/forms")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*")
public class LoanDetailsController {

    @Autowired
    private LoanDetailsService loanDetailsService;

    @GetMapping("/all")
    public List<LoanDetails> getAllLoanDetails() {
        return loanDetailsService.getAllLoanDetails();
    }

    @PostMapping("/add")
    public ResponseEntity<LoanDetails> createForm(@RequestBody LoanDetails loanDetails) {
        LoanDetails createdLoanDetails = loanDetailsService.createLoanDetails(loanDetails);
        return new ResponseEntity<>(createdLoanDetails, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<LoanDetails> updateForm(@PathVariable Long id, @RequestBody LoanDetails updatedLoanDetails) {
        LoanDetails updatedForm = loanDetailsService.updateLoanDetails(id, updatedLoanDetails);
        return updatedForm != null ? new ResponseEntity<>(updatedForm, HttpStatus.OK) :
                new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteForm(@PathVariable Long id) {
        loanDetailsService.deleteLoanDetails(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
