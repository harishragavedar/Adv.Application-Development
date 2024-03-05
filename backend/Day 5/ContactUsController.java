package com.admission.demo.Controller;

import com.admission.demo.Model.ContactUs;
import com.admission.demo.Service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:5173/", allowedHeaders = "*")
public class ContactUsController {

    @Autowired
    private ContactUsService contactUsService;

    @GetMapping
    public ResponseEntity<List<ContactUs>> getAllContactUs() {
        return new ResponseEntity<>(contactUsService.getAllContactUs(), HttpStatus.OK);
    }

    @GetMapping("/{cid}")
    public ResponseEntity<Optional<ContactUs>> getContactUsById(@PathVariable Long cid) {
        return new ResponseEntity<>(contactUsService.getContactUsById(cid), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ContactUs> saveContactUs(@RequestBody ContactUs contactUs) {
        return new ResponseEntity<>(contactUsService.saveContactUs(contactUs), HttpStatus.CREATED);
    }

    @PutMapping("/{cid}")
    public ResponseEntity<ContactUs> updateContactUs(@PathVariable Long cid, @RequestBody ContactUs updatedCourse) {
        return new ResponseEntity<>(contactUsService.updateContactUs(cid, updatedCourse), HttpStatus.OK);
    }

    @DeleteMapping("/{cid}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long cid) {
        contactUsService.deleteCourse(cid);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
