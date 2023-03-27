<?php include 'includes/header.php'; ?>

<section class="py-5">
    <div class="container">
        <div class="title text-center">Request a Quotes</div>
        <form action="" class="my-5">
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Name">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Email Address">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Phone Number">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <select name="" id="" class="form-control">
                            <option  selected disabled>Event Type</option>
                            <option value="">Exhibitions</option>
                            <option value="">Conference</option>
                            <option value="">Private Events</option>
                            <option value="">Trade Show</option>
                            <option value="">Corporate Events</option>
                            <option value="">Promotions Talk Show</option>
                            <option value="">Concerts</option>
                            <option value="">Sport Events</option>
                            <option value="">Live Shows</option>
                            <option value="">Activation</option>
                            <option value="">Road Shows</option>
                            <option value="">Social Events</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Date" onfocus='this.type="date"' onblur='this.type="text"'>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Event Venue">
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group">
                        <textarea name="" id="" rows="4" class="form-control" placeholder="Message"></textarea>
                    </div>
                    <button class="btn btn-success text-capitalize">send message</button>
                </div>
            </div>
        </form>
    </div>
</section>

<?php include 'includes/footer.php'; ?>

</body>
</html>